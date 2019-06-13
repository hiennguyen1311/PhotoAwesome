import firebase from 'react-native-firebase';

const firebaseConfig = () => firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });

export default firebaseConfig;
