import PropTypes from 'prop-types';
import { ImPhone, ImUser } from 'react-icons/im';
import {
  DeleteBtn,
  ContactInfo,
  ContactName,
  ContactPhone,
} from './ContactCard.styled';

const ContactCard = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <ContactInfo>
        <ContactName>
          <ImUser />
          <span>{name}</span>
        </ContactName>
        <ContactPhone>
          <ImPhone />
          {number}
        </ContactPhone>
      </ContactInfo>
      <DeleteBtn onClick={onDeleteContact}>Delete</DeleteBtn>
    </>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactCard;
