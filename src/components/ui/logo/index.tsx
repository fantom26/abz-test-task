import { FC } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "hooks";
import { IMAGES } from "utils/constants";

export const Logo: FC = () => {
  const t = useTranslation();

  return (
    <div className="logo">
      <Link to="/" aria-label={t.alts.goToMain}>
        {IMAGES.logo}
      </Link>
    </div>
  );
};
