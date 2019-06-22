import { CHANGE_SETTING } from "@constant/actionName";
import { ISetting } from "@model/interface";

export const changeSetting = (payload: ISetting) => {
  return {
    type: CHANGE_SETTING,
    payload
  }
}