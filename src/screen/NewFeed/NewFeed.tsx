import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationScreenOptions, ScrollView } from 'react-navigation';
import { color } from '@config/styleConfig';
import i18n from '@i18n/i18n';
import { styles } from './styles';
import stylesGlobal from '@config/styleGlobal';
import { ApplicationState } from '@model/appState';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import getImage from '@service/newFeedApi';
import { Button, Icon } from 'react-native-elements';
import { options } from '@util/image';
import ImagePicker from 'react-native-image-picker';
import { convertObjectToArray, widthWindow } from '@util/common';
import MasonryList from "react-native-masonry-list";
import { uploadImage } from '@redux/NewFeed/action';
import { UploadImageAction } from '@model/newFeed';
import CustomSpinner from '@component/CustomSpinner/CustomSpinner';

type PropsNewFeed = {
  navigation: NavigationScreenProp<any>;
  imageColumn: number;
  uploadImage: (payload: any) => UploadImageAction;
  isLoading: boolean;
};
type StateNewFeed = {
  imagSource: any;
  data: any;
};

export class NewFeedScreen extends Component<PropsNewFeed, StateNewFeed>{
  /**
   * Custom navigation.
   * @returns object NavigationScreenOptions.
   */
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      title: i18n.translate('NEW_FEED.TITLE'),
      headerStyle: {
        backgroundColor: color.blueMalibu,
      },
    };
  }

  constructor(props: PropsNewFeed) {
    super(props);
    this.state = {
      imagSource: '',
      data: [],
    };
  }

  componentWillMount() {
    // firebase.database().ref('images/').on('value', (snapshot) => {
    //   this.setState({
    //     data: snapshot.val()
    //   });
    // });
  }

  image() {
    const image = getImage()
    return image;
  }

  onUpload = () => {
    const { uploadImage } = this.props;

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        uploadImage({ uri: 'data:image/jpeg;base64,' + response.data });
        this.setState({
          imagSource: source,
        });
      }
    })
  }

  handleOnPressImage = (data: any, index: number) => {
    this.props.navigation.navigate('ImageSlider', { data, index })
  }

  renderList() {
    const arr = convertObjectToArray(this.state.data);
    const { imageColumn } = this.props;
    const onPressImage = (item: any, index: number) => this.handleOnPressImage(arr, index);

    return <MasonryList
      columns={imageColumn}
      images={arr.map(item => {
        return {
          ...item,
          dimensions: { width: item.width, height: item.height },
          uri: item.uri
        }
      })}
      initialColToRender={2} // columns render first
      initialNumInColsToRender={5}
      //completeCustomComponent={ResponsiveImage}
      imageContainerStyle={{ borderRadius: 2 }}
      onPressImage={onPressImage}
    />
  }

  render() {
    const { isLoading } = this.props;

    return (
      <View style={stylesGlobal.flex1}>
        <View>
          <Button
            title=""
            iconRight
            icon={<Icon type="ionicon" name='md-cloud-upload' color={color.white} />}
            onPress={this.onUpload}
            buttonStyle={[stylesGlobal.button, { width: (widthWindow / 2) - 10, margin: 5 }]}
          />
          <View style={{ width: '100%', height: '100%', paddingBottom: 100 }}>
            {
              this.renderList()
            }
            </View>
        </View>
        <CustomSpinner isVisible={isLoading} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    dispatch,
    uploadImage: (payload: any) => dispatch(uploadImage(payload))
  });
};

/**
 * map state to props
 * @param state object to ApplicationState
 * @return objects
 */
const mapStateToProps = (state: ApplicationState) => {
  return ({
    isLoading: state.newFeed.isLoading,
    imageColumn: state.app.setting.imageColumn,
    imageUploaded: state.newFeed.imageUploaded,
    error: state.newFeed.error,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedScreen);
