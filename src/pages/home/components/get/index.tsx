import { FC, useEffect } from "react";

import { Button, Container, Loader, Typography } from "components/ui";
import { useAppSelector, useDispatchedActions, useTranslation } from "hooks";
import { getAllUsers } from "store/selectors";

import { UsersList } from "./components/users";

export const Get: FC = () => {
  const t = useTranslation();

  const { page, limit, usersStatus, error, hasMore } = useAppSelector(getAllUsers);
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
        <UsersList />
        {usersStatus !== "loading" && hasMore && <Button onClick={loadMoreItems}>{t.btn.showMore}</Button>}
        {usersStatus === "loading" && <Loader />}
      </Container>
    </section>
  );
};
