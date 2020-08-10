var firebaseConfig = {
  apiKey: "AIzaSyCIrnk0bubF5kZ7DH7seoNBJeHSsSISrzk",
  authDomain: "apply-maxischmid.firebaseapp.com",
  databaseURL: "https://apply-maxischmid.firebaseio.com",
  projectId: "apply-maxischmid",
  storageBucket: "apply-maxischmid.appspot.com",
  messagingSenderId: "489119852536",
  appId: "1:489119852536:web:7456b9b9609d306fd7d80d",
  measurementId: "G-XZ16ZJJ9MV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();
const colApplications = firestore.collection('applications');


//Cache elements
const welcome = document.getElementById('welcome');

//Handle stuff
var applicationId = window.location.pathname.replace('/', '');
if(applicationId == '') { applicationId = 'undefined' }


colApplications.doc(applicationId).get().then((doc) => {
  if(doc && doc.exists) {
    welcome.innerText = 'Dataset found: ' + doc.data().src
    document.body.style.background = doc.data().bg.includes('#') ? doc.data().bg : `#${doc.data().bg}`
  } else {
    welcome.innerText = 'Dataset not found.'
  }
});