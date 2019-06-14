import React from 'react';
import { View, ImageURISource, Image, ImageStyle } from 'react-native';
import { styles } from './styles';
import { widthWindow } from '@util/common';
const defaultDimension = widthWindow / 2;

interface ImageProps {
  source: ImageURISource;
  width?: number;
  height?: number;
  imageStyle?: ImageStyle;
}

interface ImageState {
  ratio: number;
}

export default class ResponsiveImage extends React.PureComponent<ImageProps> {

  render() {
    let { source, width = defaultDimension, height, imageStyle} = this.props
    //this.getAspectRatio(source.uri)
    //const { ratio } = this.state;
    height = height ? height : width / 0.5;
    
    return <View>
      <Image source={source} style={[styles.image(width, height), imageStyle]} />
    </View>;
  }
}