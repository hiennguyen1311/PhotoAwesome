import RNCloudinary from 'react-native-cloudinary-x'
const API_KEY = '843391347736845'
const API_SECRET = 'XdRYnQZAjXd9UWZpvNmBjGxvN1E'
const CLOUD_NAME = 'beyond-anttech';
const folder = 'PhotoAwesome';

export const cloudinary = RNCloudinary.init(API_KEY,API_SECRET, CLOUD_NAME);

export const uploadImage = (uri: string) => {
  RNCloudinary.UploadImage(uri).then((res: any) => {
    console.log(res)
  }) 
  .catch((err: any) => {
    console.warn(err)
  })
}