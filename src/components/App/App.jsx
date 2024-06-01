import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactFormFormik } from '../ContactFormFormik';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { Modal } from '../Modal';
import { Container } from './App.styled';
import { StyledIconBtn } from '../IconButton';
import AddContactBtn from '../../icons/add-contact.svg?react';
// import contacts from '../../contacts.json';

const LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  // componentDidUpdate приймає 3 параметри "prevProps", "prevState", необовязковий "snapshot".)
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const { contacts: prevContacts } = prevState;

    if (contacts !== prevContacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }

    if (contacts.length > prevContacts.length && prevContacts.length !== 0) {
      this.toggleModal();
    }
  }

  addContact = (name, number) => {
    const isNameExist = this.checkNameInContacts(name);

    if (isNameExist) {
      alert(`Контакт "${name}" вже існує!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  checkNameInContacts = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  handleFilterChange = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  getTotalContacts = () => {
    const { contacts } = this.state;
    return contacts.length;
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    const filtredContacts = this.getFilteredContacts();
    const totalContacts = this.getTotalContacts();

    return (
      <Container>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactFormFormik onSubmit={this.addContact} />
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
        <h1>Phonebook</h1>
        <p>Всього контактів: {totalContacts}</p>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
        <StyledIconBtn onClick={this.toggleModal} aria-label="Add New Contact">
          <AddContactBtn width="24" height="24" />
        </StyledIconBtn>
      </Container>
    );
  }
}
