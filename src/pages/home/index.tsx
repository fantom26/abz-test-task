import { FC, useEffect } from "react";

import { useAppSelector } from "hooks";
import { useDispatchedActions } from "hooks/use-dispatched-actions";
import { getAccesses, getAllPositons } from "store/selectors";

import { Get } from "./components/get";
import { Hero } from "./components/hero";
import { Post } from "./components/post";

const Home: FC = () => {
  const { positionsStatus } = useAppSelector(getAllPositons);
  const { tokenStatus } = useAppSelector(getAccesses);

  const { getPositions, getTokenForRegistation } = useDispatchedActions();

  useEffect(() => {
    if (positionsStatus === "idle") {
      getPositions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionsStatus]);

  useEffect(() => {
    if (tokenStatus === "idle") {
      getTokenForRegistation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenStatus]);

  return (
    <>
      <Hero />
      <Get />
      <Post />
    </>
  );
};

export default Home;
