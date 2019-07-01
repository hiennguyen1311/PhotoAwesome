import React, { Component } from 'react';
import { NavigationScreenProp, ScrollView, FlatList } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { View, TouchableOpacity, Modal } from 'react-native';
import { widthWindow } from '@util/common';
import GalleryImage from '@component/GalleryImage/GalleryImage';
import HeaderTitle from '@component/Header/HeaderTitle';
import i18n from '@i18n/i18n';
import stylesGlobal from '@config/styleGlobal';
import { styles } from './styles';
import color from '@config/color';
import { Text, Icon, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Hyperlink from 'react-native-hyperlink'

const margin = 0;
const itemWidth = widthWindow - margin;
const sliderWidth = widthWindow;
const i18Key = 'IMAGE_SLIDER';

type Props = {
  navigation: NavigationScreenProp<any>;
};

type State = {
  data: any;
  index: number;
  visibleModal: boolean;
  selectedImage: any;
}

export default class ImageSlider extends Component<Props, State>{
  carousel: any;
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: color.black,
        borderBottomWidth: 0,
      },
      headerRight: <View style={styles.buttonContainer}>
        <Button type='clear' icon={<Icon name="ios-trash" type="ionicon" color={color.white}/>}/>
        <Button type='clear' icon={<Icon name="md-share" type="ionicon" color={color.white}/>}/>
      </View>
    };
  }

  constructor(props: Props) {
    super(props);
    const data = props.navigation.getParam('data', []);
    const index = props.navigation.getParam('index', 0);
    this.state = {
      data,
      index,
      selectedImage: data[index] || {},
      visibleModal: false,
    };
  }

  onToggleModal = () => {
    this.setState({
      visibleModal: !this.state.visibleModal,
    });
  }

  onIndexChanged = (index: number) => {
    this.setState({
      index,
    });
  }

  renderItem = (item: any, index: number) => {
    const width = widthWindow;
    const imageHeight = item.height || widthWindow;
    const imageWidth = item.width || widthWindow;
    const ratio = imageWidth / imageHeight;
    const height = width / ratio;

    return <View key={index} style={[stylesGlobal.flexCenterAll]}>
      <GalleryImage
        width={width}
        source={{ uri: item.url }}
        height={height}
      />
    </View>
  }

  renderDetail(item: any) {
    if(!item.url) return
    return <TouchableOpacity onPress={this.onToggleModal} style={styles.detailContainer(color)}>
      <Text style={styles.detailText(color)}>
        {item.url}
      </Text>
    </TouchableOpacity>
  }

  renderTextDetail({title, key}: {title: string, key: string}) {
    return <Hyperlink key={key} linkDefault={true} linkStyle={styles.hyperlink(color)}>
      <Text style={styles.imageDetailText}>{title}</Text>
    </Hyperlink>
  }

  renderModal() {
    const { visibleModal, selectedImage } = this.state;
    const { url = '' } = selectedImage;
    let dataText = [];
    let title = '';
    for (let key in selectedImage) {
      title = `${key}: ${selectedImage[key]}`
      dataText.push(this.renderTextDetail({title, key: title}))
    }

    return <Modal animationType={'slide'} visible={visibleModal} transparent>
      <View style={styles.modalContainer(color)}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={this.onToggleModal}>
            <Icon type="ionicon" name="md-close" size={40} color={color.white} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataText}
          style={styles.modal(color)}
          renderItem={({item}) => item as any}
        />
      </View>
    </Modal>
  }

  render() {
    const { data, index } = this.state;

    return <View style={[stylesGlobal.flex1, styles.container(color)]}>
      <Swiper
        index={index} showsPagination={false}
        onIndexChanged={this.onIndexChanged}
        loop={false}
        loadMinimal={true}
        loadMinimalSize={1}
      >
        {data.map(this.renderItem)}
      </Swiper>
      {this.renderDetail(data[index])}
      {/* <Carousel
        firstItem={index}
        ref={(c: any) => { this.carousel = c; }}
        data={data}
        renderItem={this.renderItem.bind(this)}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      /> */}
      {this.renderModal()}
    </View>
  }
}
