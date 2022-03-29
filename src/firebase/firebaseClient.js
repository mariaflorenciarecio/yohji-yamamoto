import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiFwgAcUs37MhPx_9QhLA6S-9vc1UtSWA",
  authDomain: "yohji-yamamoto-d0455.firebaseapp.com",
  projectId: "yohji-yamamoto-d0455",
  storageBucket: "yohji-yamamoto-d0455.appspot.com",
  messagingSenderId: "1045507018925",
  appId: "1:1045507018925:web:bff425bc151b6d21b2f624"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// export const itemsCollection = collection(db, "items")

// Obtener data
// const getItems = async() => {
//   const querySnapshot = await getDocs(collection(db, "items"))
//   let items = []
//   querySnapshot.forEach((doc) => {
//     items.push({
//       id: doc.id,
//       ...doc.data()
//     })
//   })
//   return items
// }

// Obtener data por categoría
// const getItemsByProp = async(prop, value) => {
//   const q = query(collection(db, "items"), where(prop, "==", value))
//   const querySnapshot = await getDocs(q)
//   let items = []
//   querySnapshot.forEach((doc) => {
//     items.push(doc.data())
//   })
//   return items
// }

// Obtener data por ID
const getItemsById = async(id) => {
  const docRef = doc(collection(db, "items"), id)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

// 
const addOrder = async(order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
}

export {
  db,
  // getItems,
  // getItemsByProp,
  getItemsById,
  addOrder
}