import { collection, getDocs, addDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function readCars(collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = [];

  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
    // console.log(`${doc.id} => ${doc.data()}`);
    // console.log("car id:", doc.id);
    // console.log("car data", doc.data());
    // console.log("data", { id: doc.id, ...doc.data()});
  });

  return result;
}

export async function addCars(item) {
  try {
    const docRef = await addDoc(collection(database, "formula-1-cars"), {
        driver: item.driver,
        image: item.image ,
        name: item.name,
        team: item.team
    }) 
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
