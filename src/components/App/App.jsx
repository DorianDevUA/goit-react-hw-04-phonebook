import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import contacts from '../../contacts.json';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    const isNameExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName,
    );

    if (isNameExist) {
      alert(`Контакт на ім'я ${name} вже існує!`);
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

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
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
      <div>
        <h1>Phonebook</h1>
        <p>Всього контактів: {totalContacts}</p>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
