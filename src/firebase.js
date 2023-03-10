import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getFirestore, collection, getDocs/*, addDoc */} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore-lite.js';

const firebaseConfig = {
  apiKey: "AIzaSyB_lDYORlDxwYNGmlGc9eqObonfeQNJEfY",
  authDomain: "iglesia-f2d34.firebaseapp.com",
  projectId: "iglesia-f2d34",
  storageBucket: "iglesia-f2d34.appspot.com",
  messagingSenderId: "355704246458",
  appId: "1:355704246458:web:695d99af033e8ee4c67283",
  measurementId: "G-S3ME94JT9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

const getIglesia = () => getDocs(collection(db,'iglesias'))

//console.log("si funciona")
/*export const setIglesia = (nombre,pastor,Barrio,Ciudad,Departamento,direccion,Telefono) => {
 console.log(nombre+pastor+direccion)
}*/

const fFirebase = async () =>
{
  const jsonIglesias = []
  
  try{
   // const modFirebase = await import("./firebase.js")
    
    const queryData =  await getIglesia()
    queryData.forEach(doc => jsonIglesias.push(doc.data()))
    //console.log(queryData)
    console.log("Json Iglesia")
    console.log(jsonIglesias)
    //cargaDatos()
  } catch(error){
      console.error(error);
  }

return jsonIglesias
}
const Firebase = fFirebase()

export {Firebase}