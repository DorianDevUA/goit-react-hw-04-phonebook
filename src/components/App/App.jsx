import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { Modal } from '../Modal';
import { Container } from './App.styled';
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
        {showModal && <Modal onClose={this.toggleModal}>
          <h2>Hello World!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa a, nostrum similique sit at quas molestias recusandae sequi, distinctio ducimus autem dolores quibusdam, quidem dolore nam non! Harum dolor, non placeat ea culpa saepe nemo est ab quae soluta rerum aliquam, dolores minus doloremque, voluptatem dignissimos ratione porro eum? Sed!</p>
          <button type="button" onClick={this.toggleModal}>Close Modal</button>
        </Modal>}
        <h1>Phonebook</h1>
        <p>Всього контактів: {totalContacts}</p>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
        <button type="button" onClick={this.toggleModal}>Open Modal</button>
      </Container>
    );
  }
}
