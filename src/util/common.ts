import { Platform, Dimensions } from "react-native";

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const OsVersion = Platform.Version;

export const parseObject = <T>(stringObject: string): T => JSON.parse(stringObject);
export const stringifyObject = (object: any) => JSON.stringify(object);
export const widthWindow = Dimensions.get('window').width;
export const heightWindow = Dimensions.get('window').height;

export function convertObjectToArray(obj: any) {
  if(!obj) return [];
  const result = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  return result;
}  
