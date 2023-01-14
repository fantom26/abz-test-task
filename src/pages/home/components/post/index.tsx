import { FC } from "react";

import { Container, Typography } from "components/ui";
import { useAppSelector, useTranslation } from "hooks";
import { getAllUsers } from "store/selectors";
import { IMAGES } from "utils/constants";

import { PostForm } from "./components/form";

export const Post: FC = () => {
  const t = useTranslation();

  const { userRegistered } = useAppSelector(getAllUsers);

  return (
    <section className="post" id="sign">
      <Container>
        <Typography tag="h2" variant="h1" center>
          {!userRegistered ? t.pages.home.post.title : t.pages.home.post.titleSuccess}
        </Typography>
        {!userRegistered ? <PostForm /> : <div className="post__image">{IMAGES.success}</div>}
      </Container>
    </section>
  );
};
