import { ImageCloudinary } from "./interface";

export interface NewFeedState {
  newFeed: any;
  error: string;
  isLoading: boolean;
  imageUploaded: ImageCloudinary;
}

export interface NewFeedAction {
  type: string;
  payload: any;
}

export interface NewFeedResponse extends NewFeedAction {
  error: string;
  data: ImageCloudinary
}

export interface UploadImageAction {
  type: string;
  payload: any;
}
