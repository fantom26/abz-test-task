import { FC } from "react";

import { Typography } from "components/ui";
import { IMAGES } from "utils/constants";
import { IUser } from "utils/declarations";

export const UserCard: FC<{ info: IUser }> = (props) => {
  const { photo, name, position, email, phone } = props.info;

  return (
    <li className="user">
      <div className="user__img">{photo ? <img src={photo} width="70" height="70" alt="User's photo" loading="lazy" /> : IMAGES.user}</div>
      <div className="user__name" data-title={name}>
        <Typography tag="h3" center>
          {name}
        </Typography>
      </div>
      <div className="user__position" data-title={position}>
        <Typography tag="p" center>
          {position}
        </Typography>
      </div>
      <div className="user__email" data-title={email}>
        <Typography tag="p" center>
          {email}
        </Typography>
      </div>
      <Typography tag="p" center>
        {phone}
      </Typography>
    </li>
  );
};
