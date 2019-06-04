import React from 'react';
import { Icon } from 'react-native-elements';
import { Image, View, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';
import { IIconTab } from '@model/interfaceImport';

export function getIconTab(
  iconInfo: IIconTab,
  focused: boolean,
) {
  if (iconInfo.isFont) {
    return <View
      style={[styles.iconActive, {
        backgroundColor: focused ? iconInfo.inactive : iconInfo.active,
      },
      ]}>
      <Icon type="ionicon" name={iconInfo.iconName || ''} size={25}
        containerStyle={[styles.iconStyle, iconInfo.iconStyle || {}]}
        color={focused ? iconInfo.active : iconInfo.inactive}></Icon>
    </View>;
  }
  return <View
    style={[
      styles.iconActive,
      styles.svgContainer,
      {
        backgroundColor: focused ? iconInfo.inactive : iconInfo.active,
      },
    ]}>
    {iconInfo.svg ? iconInfo.svg(focused ? iconInfo.svgColorActive : iconInfo.inactive) : null}
  </View>;
}
