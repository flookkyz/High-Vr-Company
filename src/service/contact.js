import { firebase } from "../conf";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const contactRef = collection(firebase, "contact");
class ContactDataService {
  addContact = (newContact) => {
    return addDoc(contactRef, newContact);
  };

  deleteContact = (id) => {
    const contactDoc = doc(firebase, "contact", id);
    return deleteDoc(contactDoc);
  };

  getAllContact = () => {
    return getDocs(contactRef);
  };

  getContact = (id) => {
    const contactDoc = doc(firebase, "contact", id);
    return getDoc(contactDoc);
  };
}

export default new ContactDataService();
