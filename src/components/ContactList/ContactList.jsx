import PropTypes from 'prop-types';
import ContactCard from '../ContactCard';
import { Contacts, ContactItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactCard
              id={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </ContactItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
