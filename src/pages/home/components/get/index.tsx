import { useEffect } from "react";

import { UserCard } from "components/cards";
import { Button, Container, Loader, Typography } from "components/ui";
import { useAppSelector, useDispatchedActions, useTranslation } from "hooks";
import { getAllUsers } from "store/selectors";

export const Get = () => {
  const t = useTranslation();

  const { page, limit, usersStatus, error, users, hasMore } = useAppSelector(getAllUsers);
  const { getUsers, incrementPage } = useDispatchedActions();

  const loadMoreItems = () => {
    getUsers({ page, count: limit });
    incrementPage();
  };

  useEffect(() => {
    if (usersStatus === "idle") {
      loadMoreItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersStatus]);

  return (
    <section className="get" id="users">
      <Container>
        <Typography tag="h2" variant="h1" center>
          {t.pages.home.get.title}
        </Typography>
        {error && (
          <Typography variant="h1" className="get__error" center>
            {error}
          </Typography>
        )}
        <ul className="get__users">
          {users.map((user) => (
            <UserCard key={user.id} info={user} />
          ))}
        </ul>
        {usersStatus !== "loading" && hasMore && <Button onClick={loadMoreItems}>{t.btn.showMore}</Button>}
        {usersStatus === "loading" && <Loader />}
      </Container>
    </section>
  );
};
