import { FC } from "react";

import { UserCard } from "components/cards";
import { useAppSelector } from "hooks";
import { getAllUsers } from "store/selectors";

export const UsersList: FC = () => {
  const { users } = useAppSelector(getAllUsers);

  return (
    <ul className="get__users">
      {users.map((user) => (
        <UserCard key={user.id} info={user} />
      ))}
    </ul>
  );
};
