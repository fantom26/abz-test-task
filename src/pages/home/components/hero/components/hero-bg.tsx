import { FC } from "react";

import { getImage } from "utils/helpers";

export const HeroBg: FC = () => (
  <div className="hero-bg">
    <picture>
      <source srcSet={`${getImage("heroBg1xMob")} 1x, ${getImage("heroBg2xMob")} 2x`} type="image/avif" media="(max-width: 576px)" />
      <img src={getImage("heroBg1x")} srcSet={getImage("heroBg2x")} width="1170" height="650" loading="lazy" alt="Ukrainian lanscape" />
    </picture>
  </div>
);
