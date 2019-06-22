import { NewFeedState } from "./newFeed";
import { AppState } from "./app";

export interface ApplicationState {
  app: AppState;
  newFeed: NewFeedState;
}