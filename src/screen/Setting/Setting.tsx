import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Text } from 'react-native-elements';
import i18n from '@i18n/i18n';
import { color } from '@config/styleConfig';
import { styles } from './styles';
import HeaderTitle from '@component/Header/HeaderTitle';
import stylesGlobal from '@config/styleGlobal';
import { ApplicationState } from '@model/appState';
import { Dispatch } from 'redux';
import { changeSetting } from '@redux/App/action';
import { InputPicker } from '@component/InputPicker/InputPicker';
import { appConfig } from '@config/config';
import { ISetting } from '@model/interface';
const i18Key = 'SETTING';
const maxImageCount = appConfig.maxImageCount;

type PropsSetting = {
  navigation: NavigationScreenProp<any>;
  imageColumn: number;
  changeSetting: (payload: ISetting) => any
};


class SettingScreen extends Component<PropsSetting>{
  static navigationOptions = () => {
    return {
      headerTitle: <HeaderTitle text={i18n.translate('SETTING.TITLE')} />,
      headerStyle: {
        backgroundColor: color.primary,
      },
    };
  }

  dataPicker() {
    let dataArr = []
    for (let i = 1; i <= maxImageCount; i++) {
      dataArr.push({ label: i.toString(), value: i.toString(), id: i.toString })
    }
    return dataArr;
  }

  onChangeValuePicker = (item: any, index: number) => {
    const { changeSetting } = this.props;
    changeSetting({ imageColumn: parseInt(item) || appConfig.imageColumn })
  }

  render() {
    const { imageColumn } = this.props;
    const columnNumber = i18n.t(`${i18Key}.IMAGE_COLUMNS`);

    return <View style={stylesGlobal.flex1}>
      <InputPicker
        label={columnNumber}
        value={imageColumn.toString()}
        items={this.dataPicker()}
        onChangeValuePicker={this.onChangeValuePicker}
      />
    </View>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    dispatch,
    changeSetting: (payload: any) => dispatch(changeSetting(payload))
  });
};

/**
 * map state to props
 * @param state object to ApplicationState
 * @return objects
 */
const mapStateToProps = (state: ApplicationState) => {
  return ({
    imageColumn: state.app.setting.imageColumn,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
