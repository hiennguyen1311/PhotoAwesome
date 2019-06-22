import {
  CHANGE_SETTING
} from '@constant/actionName';
import { AppState, AppResponse } from '@model/app';
import { appConfig } from '@config/config';

const initialState: AppState = {
  setting: {
    imageColumn: appConfig.imageColumn,
  },
};

const newFeed = (state = initialState, action: AppResponse): AppState => {
  switch (action.type) {
    case CHANGE_SETTING: {
      console.log(action)
      return {
        ...state,
        setting: {
          ...state.setting,
          ...action.payload,
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default newFeed;
