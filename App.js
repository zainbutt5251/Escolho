import React, {useEffect} from 'react';
import App from './navigation';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import {MenuProvider} from 'react-native-popup-menu';
import store from './src/Store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Old FireBase Account #SaadEWD

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDHUykUoX5_2mM13nt3dheRa6wDeKtgMA',
//   authDomain: 'tbportal-75e42.firebaseapp.com',
//   databaseURL: 'https://tbportal-75e42.firebaseio.com',
//   projectId: 'tbportal-75e42',
//   storageBucket: 'tbportal-75e42.appspot.com',
//   messagingSenderId: '491033399322',
//   appId: '1:491033399322:web:2d3d814e3f1b5a868301a3',
//   measurementId: 'G-JXCTNEJN0W',
// };


// New FireBase Account
// bbpsystem1@gmail.com


var firebaseConfig = {
  apiKey: "AIzaSyBTy_3vccH9l3QFfNHh3jP8Hn2IHRK2y6g",
  authDomain: "sgi-escola.firebaseapp.com",
  databaseURL: "https://sgi-escola-default-rtdb.firebaseio.com",
  projectId: "sgi-escola",
  storageBucket: "sgi-escola.appspot.com",
  messagingSenderId: "921220270288",
  appId: "1:921220270288:web:0c4ef774efbe2d0a9336d5",
  measurementId: "G-3M4TENY7N9"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.storage();
}
export {firebase, Auth};
function setup() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  );
}

// setup.propTypes = {};

export default setup;
