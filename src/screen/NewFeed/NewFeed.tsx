import React, { Component } from 'react';
import { View, Image } from 'react-native';
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
import { convertObjectToArray } from '@util/common';
import firebase from 'react-native-firebase';
import ResponsiveImage from '@component/ResponsiveImage/ResponsiveImage';
import { uploadImage } from '@service/cloudinary';

type PropsNewFeed = {
  navigation: NavigationScreenProp<any>,
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
    firebase.database().ref('Images/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  image() {
    const image = getImage()
    return image;
  }

  onUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        //uploadImage(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        uploadImage(response.uri);
        this.setState({
          imagSource: source,
        });
      }
    })
  }

  renderList() {
    const arr = convertObjectToArray(this.state.data);
    return arr.map((item, index) => <ResponsiveImage key={index} source={{uri: item.url || item || ''}} />)
  }

  render() {
    return (
      <View style={stylesGlobal.flex1}>
        <View>
          <Button
            title=""
            iconRight
            icon={<Icon type="ionicon" name='md-camera' color={color.white}/>}
            onPress={this.onUpload}
            buttonStyle={[stylesGlobal.button, { width: '50%', margin: 10 }]}
          />
          <ScrollView style={{width: '100%'}}>
            <View style={{width: '100%'}}>
              {
                this.renderList()
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    dispatch,
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
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedScreen);
