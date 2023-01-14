import { AccessActions } from "./access/access.slice";
import { PositionActions } from "./position/positions.slice";
import { TranslationActions } from "./translation/translation.slice";
import { UsersActions } from "./user/user.slice";

export const StoreActions = {
  ...TranslationActions,
  ...PositionActions,
  ...UsersActions,
  ...AccessActions
};
