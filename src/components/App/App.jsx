import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactFormFormik from '../ContactFormFormik';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Modal from '../Modal';
import AddContactBtn from '../../icons/add-contact.svg?react';
import { Container } from './App.styled';
import { StyledIconBtn } from '../IconButton';
// import contacts from '../../contacts.json';

const LOCAL_STORAGE_KEY = 'localContacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    contacts.length
      ? localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
      : localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, [contacts]);

  const addContact = (name, number) => {
    const isNameExist = checkNameInContacts(name);

    if (isNameExist) {
      alert(`Контакт "${name}" вже існує!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([newContact, ...contacts]);
    toggleModal();
  };

  const checkNameInContacts = name => {
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFilterChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filtredContacts = getFilteredContacts();

  return (
    <Container>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactFormFormik onSubmit={addContact} />
          <button type="button" onClick={toggleModal}>
            Close Modal
          </button>
        </Modal>
      )}
      <h1>Phonebook</h1>
      <p>Всього контактів: {contacts.length}</p>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filtredContacts} onDeleteContact={deleteContact} />
      <StyledIconBtn onClick={toggleModal} aria-label="Add New Contact">
        <AddContactBtn width="24" height="24" />
      </StyledIconBtn>
    </Container>
  );
};

export default App;
