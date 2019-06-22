import { ISetting } from "./interface";

export interface AppState {
  setting: {
    imageColumn: number;
  };
}

export interface AppAction {
  type: string;
  payload: ISetting;
}

export interface AppResponse extends AppAction {

}

