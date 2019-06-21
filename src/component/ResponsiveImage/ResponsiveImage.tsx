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

export default class ResponsiveImage extends React.PureComponent<ImageProps, ImageState> {
  state = {
    ratio: 1
  }
  getRatio() {
    const { source } = this.props;
    let ratio = 0;
    Image.getSize(source.uri, (width: number, height: number) => {
      this.setState({
        ratio: width / height
      })
    }, () => {} )
    return ratio;
  }
  render() {
    let { source, width = defaultDimension, height = defaultDimension, imageStyle} = this.props;
    const { ratio } = this.state;
    this.getRatio();

    if(height && width) {
      height = (height  * defaultDimension) / width;
    }
    
    return <View>
      <Image source={source} style={[styles.image(defaultDimension, height), imageStyle]} />
    </View>;
  }
}