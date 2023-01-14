import { $api } from "./axios.service";

export type GetTokenResponse = {
  success: boolean;
  token: string;
};

export class AccessService {
  static getToken() {
    return $api.get<GetTokenResponse>("/token");
  }
}
