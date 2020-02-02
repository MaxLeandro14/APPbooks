import firebase from 'firebase'
import auth from 'firebase/auth'

// Agregar configuración firebase:
var firebaseConfig = {
    apiKey: "AIzaSyBodWuVA8rNi0mu9zXP3F7XfBq6G1sJJoQ",
    authDomain: "disposim-6aede.firebaseapp.com",
    databaseURL: "https://disposim-6aede.firebaseio.com",
    projectId: "disposim-6aede",
    storageBucket: "disposim-6aede.appspot.com",
    messagingSenderId: "134639786925",
    appId: "1:134639786925:web:c5988e76591e678e181f24"
};

export const fireApp = firebase.initializeApp(firebaseConfig)

export const AUTH = fireApp.auth()

export default ({ Vue }) => {
  Vue.prototype.$auth = AUTH
}
