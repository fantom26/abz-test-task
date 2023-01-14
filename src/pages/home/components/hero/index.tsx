import { FC } from "react";

import { Button, Container, Typography } from "components/ui";
import { useTranslation } from "hooks";

import { HeroBg } from "./components/hero-bg";

export const Hero: FC = () => {
  const t = useTranslation();
  return (
    <section className="hero">
      <Container>
        <div className="hero-wrapper">
          <HeroBg />
          <div className="hero-info">
            <Typography tag="h1" variant="h1" color="white" center>
              {t.pages.home.hero.title}
            </Typography>
            <Typography tag="p" color="white" center>
              {t.pages.home.hero.description}
            </Typography>
            <Button path="#sign" hashLink>
              {t.navigation.signUp}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
