import { FC } from "react";

import { Button, Container, Typography } from "components/ui";
import { useTranslation } from "hooks";
import { getImage } from "utils/helpers";

export const Hero: FC = () => {
  const t = useTranslation();
  return (
    <section className="hero">
      <Container>
        <div className="hero-wrapper">
          <div className="hero-bg">
            <picture>
              <source srcSet={`${getImage("heroBg1xMob")} 1x, ${getImage("heroBg2xMob")} 2x`} type="image/jpg" media="(max-width: 576px)" />
              <img src={getImage("heroBg1x")} srcSet={getImage("heroBg2x")} width="1170" height="650" loading="lazy" alt="Ukrainian lanscape" />
            </picture>
          </div>
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
