import React from 'react';
import { View, ImageURISource, Image, ImageStyle } from 'react-native';
import { styles } from './styles';
import { widthWindow } from '@util/common';
const margin = 7.5;
const defaultDimension = (widthWindow / 2) - margin;

interface ImageProps {
  source: ImageURISource;
  width?: number;
  height?: number;
  imageStyle?: ImageStyle;
}

interface ImageState {
  ratio: number;
}

export default class GalleryImage extends React.PureComponent<ImageProps, ImageState> {
  state = {
    ratio: 1
  }

  render() {
    let { source, width = defaultDimension, height = defaultDimension, imageStyle} = this.props;

    return <View>
      <Image source={source} style={[styles.image(width, height), imageStyle]} />
    </View>;
  }
}