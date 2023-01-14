import { FC, HTMLAttributes, ReactNode } from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  type?: "button" | "submit";
  isLoading?: boolean;
  className?: string;
  path?: string;
  hashLink?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  // **Props
  const { type = "button", isLoading, className: classes = "", children, hashLink = false, path = "", ...rest } = props;

  const defineClasses = () => {
    let classNames = `btn ${classes}`;

    if (isLoading) classNames += " disabled";

    return classNames;
  };

  if (path && hashLink) {
    return (
      <HashLink smooth to={path} className={defineClasses()} {...props}>
        {children}
      </HashLink>
    );
  }

  if (path && !hashLink) {
    return (
      <Link to={path} className={defineClasses()} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button disabled={isLoading} className={defineClasses()} type={type} {...rest}>
      <span>{children}</span>
    </button>
  );
};
