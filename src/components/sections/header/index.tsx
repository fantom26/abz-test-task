import { FC } from "react";

import { Button, Container, Logo } from "components/ui";
import { useTranslation } from "hooks";

export const Header: FC = () => {
  const t = useTranslation();
  return (
    <>
      <header className="header">
        <Container>
          <div className="header-wrapper">
            <Logo />
            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item">
                  <Button path="/#users" hashLink>
                    {t.navigation.users}
                  </Button>
                </li>
                <li className="header-nav__item">
                  <Button path="/#sign" hashLink>
                    {t.navigation.signUp}
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};
