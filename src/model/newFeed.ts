export interface NewFeedState {
  newFeed: any;
  error: string;
  isLoading: boolean;
}

export interface NewFeedAction {
  type: string;
}

export interface NewFeedResponse extends NewFeedAction {

}

