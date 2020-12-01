import {credentials} from '../credentials.js';

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

  const firebaseConfig = {
    apiKey: credentials.apiKey,
    authDomain: credentials.authDomain,
    databaseURL: credentials.databaseURL,
    projectId: credentials.projectId,
    storageBucket: credentials.storageBucket,
    messagingSenderId: credentials.messagingSenderId,
    appId: credentials.appId,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
