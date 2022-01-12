import React from "react";
import { connect } from "react-redux";
import ContactListStyled from "./ContactListStyled";
import { getVisibleContacts } from "../../redux/phoneBook/contacts-selectors";
import {
  deleteContact,
  // eslint-disable-next-line no-unused-vars
  getContacts,
} from "../../redux/phoneBook/contacts-operations";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map((contact) => {
        const { id, name, number } = contact;

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            <button
              className="delBtn"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

const mapstateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
