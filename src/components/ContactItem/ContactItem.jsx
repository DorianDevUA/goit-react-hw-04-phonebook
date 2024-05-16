import PropTypes from 'prop-types';
import { ImPhone, ImUser } from 'react-icons/im';
import { ContactCard, DeleteBtn, Info, Name } from './ContactItem.styled';

export function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <ContactCard>
      <Info>
        <Name>
          <ImUser />
          <span>{name}</span>
        </Name>
        <p>
          <ImPhone />
          {number}
        </p>
      </Info>
      <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
    </ContactCard>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
