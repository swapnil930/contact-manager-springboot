
  import axios from "axios";

export class ContactServices {
  static serverURL = 'http://localhost:8080';

  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    return axios.get(dataURL); 
    
  } 
  
  static getContact(contactId){
    let dataURL=`${this.serverURL}/contacts/${contactId}`;
    return axios.get(dataURL)
  }

  static createContact(contact){
    let dataURL=`${this.serverURL}/contacts`;
    return axios.post(dataURL,contact)
  }

  static updateContact(contactId, contact) {
    let dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
}

  static deleteContact(contactId){
    let dataURL=`${this.serverURL}/contacts/${contactId}`;
    return axios.delete(dataURL)
  }
}
 