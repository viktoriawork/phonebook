import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const getContactRequest = createAction("contacts/getContactRequest");
export const getContactSuccess = createAction("contacts/getContactSuccess");
export const getContactError = createAction("contacts/getContactError");

const changeFilter = createAction("phoneBook/changeFilter", (filter) => {
  return {
    payload: filter,
  };
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { changeFilter };
