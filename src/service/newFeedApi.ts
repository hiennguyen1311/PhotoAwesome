import firebaseConfig from "./firebase";
import firebase from "react-native-firebase";

function getImage() {
  firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }})
  let image;
  let urlTmp;
  image = firebase.storage().ref().child('image');
  
  
  return image;
}

export default getImage;
