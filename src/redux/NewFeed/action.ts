import { UPLOAD_IMAGE } from "@constant/actionName";

export const uploadImage = (payload: any) => {
  return {
    type: UPLOAD_IMAGE,
    payload
  }
}
