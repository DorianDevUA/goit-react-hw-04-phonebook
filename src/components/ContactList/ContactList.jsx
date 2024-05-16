import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';
import { Contacts } from './ContactList.styled';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
