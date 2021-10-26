import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDUlY6eUr0e9lDXbGdtgygZY2SmlNA1q1o",
 authDomain: "complaint-forum-35815.firebaseapp.com",
 projectId: "complaint-forum-35815",
 storageBucket: "complaint-forum-35815.appspot.com",
 messagingSenderId: "303128728434",
 appId: "1:303128728434:web:ebe3c29f12ed3b2a4e83eb"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

