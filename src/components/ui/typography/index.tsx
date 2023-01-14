import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  variant?: "h1" | "paragraph1";
  center?: boolean;
  color?: "black" | "white";
  className?: string;
  children?: ReactNode;
}

export const Typography: FC<TypographyProps> = (props) => {
  // **Props
  const { tag: Tag = "div", variant = "paragraph1", color = "black", center = false, children, className: classes = "", ...rest } = props;

  const getClasses = () => {
    let className = classes ? `typography ${classes}` : "typography";

    switch (variant) {
      case "h1": {
        className += " h1";
        break;
      }
      case "paragraph1": {
        className += " paragraph1";
        break;
      }
      default: {
        break;
      }
    }

    switch (color) {
      case "black": {
        className += " black";
        break;
      }
      case "white": {
        className += " white";
        break;
      }
      default: {
        break;
      }
    }

    if (center) className += " center";

    return className;
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
