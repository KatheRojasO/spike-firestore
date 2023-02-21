import { collection, getDocs, addDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function readCars(collectionName) {
    const querySnapshot = await getDocs(collection(database, collectionName));
    const result = [];
  
    querySnapshot.forEach((doc) => {
  
      const document = {id: doc.id, ...doc.data()}
      result.push(document)
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log("car id:", doc.id);
      // console.log("car data", doc.data());
      // console.log("data", { id: doc.id, ...doc.data()});
    });
  
    return result
  };