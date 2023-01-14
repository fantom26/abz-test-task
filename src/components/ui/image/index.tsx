import { FC, ImgHTMLAttributes } from "react";

import { REACT_APP_BASE_URL } from "utils/constants";

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  // **Props
  const { src, loading = "lazy", ...rest } = props;

  return (
    <img src={`${REACT_APP_BASE_URL}/${src}`} loading={loading} {...rest} />
  );
};
