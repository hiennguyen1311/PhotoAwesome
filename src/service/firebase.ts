import firebase from 'react-native-firebase';
import { Alert } from 'react-native';

const firebaseConfig = () => firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });

export function uploadImage(uri: string) {
  const ext = uri.split('.').pop(); // Extract image extension
  const name = new Date().getTime().toString()
  const filename = `${name}.${ext}`; // Generate unique name
  //this.setState({ uploading: true });
  firebase
    .storage()
    .ref(`image/${filename}`)
    .putFile(uri).then(res => {
      if (res.downloadURL) {
        writeUserData(res.downloadURL);
      }
    })
};

export function readUserData() {
  
}

export function writeUserData(url: string) {
  firebase.database().ref('Images/').push(
    {url}
  ).then((data) => {
    //success callback
    //console.log('data ', data)
  }).catch((error) => {
    //error callback
    console.log('error ', error)
  })
}

export default firebaseConfig;
