import { IPosition } from "utils/declarations";

import { $api } from "./axios.service";

export type GetPositionsResponse = {
  success: boolean;
  positions: IPosition[];
  message?: string;
};

export class PositionService {
  static getPositions() {
    return $api.get<GetPositionsResponse>("/positions");
  }
}
