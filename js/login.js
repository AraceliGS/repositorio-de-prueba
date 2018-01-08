$(document).ready(function() {
  // var $holaMundo = $('#holaMundo');
  // // Referencia a firebase
  // var $dbRef = firebase.database().ref().child('text');
  // $dbRef.on('value', snap => holaMundo.innerText = snap.val());
  (function() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBsG5X5mp_Pt4Mg57lUD90JmE-uFMB1kYk',
      authDomain: 'empezando-a-aprender-firebase.firebaseapp.com',
      databaseURL: 'https://empezando-a-aprender-firebase.firebaseio.com',
      projectId: 'empezando-a-aprender-firebase',
      storageBucket: 'empezando-a-aprender-firebase.appspot.com',
      messagingSenderId: '695357423674'
    };
    firebase.initializeApp(config);
    const preObject = $('objeto');
    // Crear referencias
    const dbRefObject = firebase.database().ref().child('objeto');
  }());
});
