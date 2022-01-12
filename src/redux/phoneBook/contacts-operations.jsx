import axios from "axios";
import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./phoneBookActions";

// axios.defaults.baseURL = "http://localhost:4040";

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(getContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch((error) => dispatch(getContactError(error)));
};
