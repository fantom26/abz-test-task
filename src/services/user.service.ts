import { IPosition, IUser } from "utils/declarations";

import { $api } from "./axios.service";

export type GetUsersResponse = {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: Record<string, string | null>;
  users: IUser[];
};

type GetPositionsResponse = {
  success: boolean;
  positions: IPosition[];
};

export class UsersService {
  static getUsers(page: number, count: number) {
    return $api.get<GetUsersResponse>("/users", { params: { page, count } });
  }

  static getPositions() {
    return $api.get<GetPositionsResponse>("/positions");
  }

  static addUser(params: any, token: string) {
    return $api.post<IUser>("/users", params, {
      headers: {
        "Content-Type": "multipart/form-data",
        Token: token
      }
    });
  }
}
