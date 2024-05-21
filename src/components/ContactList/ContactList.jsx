import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';
import { Contacts, ContactCard } from './ContactList.styled';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactCard key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </ContactCard>
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
