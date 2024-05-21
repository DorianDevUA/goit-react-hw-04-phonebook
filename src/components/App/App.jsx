import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { Container } from './App.styled';
import contacts from '../../contacts.json';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

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

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFilteredContacts();
    const totalContacts = this.getTotalContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <p>Всього контактів: {totalContacts}</p>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
