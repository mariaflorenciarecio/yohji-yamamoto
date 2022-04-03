import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDoc, addDoc } from "firebase/firestore"

// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBiFwgAcUs37MhPx_9QhLA6S-9vc1UtSWA",
    authDomain: "yohji-yamamoto-d0455.firebaseapp.com",
    projectId: "yohji-yamamoto-d0455",
    storageBucket: "yohji-yamamoto-d0455.appspot.com",
    messagingSenderId: "1045507018925",
    appId: "1:1045507018925:web:bff425bc151b6d21b2f624"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Obtener data por ID
const getItemsById = async (id) => {
    const docRef = doc(collection(db, "items"), id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

// Obtener id para la orden de compra
const addOrder = async (order) => {
    const docSnap = await addDoc(collection(db, "orders"), order)
    return docSnap.id
}

export {
    db,
    getItemsById,
    addOrder
}