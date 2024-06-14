import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        console.log('Натиснули ESC');
        onClose();
      }
    };

    console.log('Modal ComponentDidMount');
    window.addEventListener('keydown', handleKeyDown);
    console.log('Слухач додано');

    return () => {
      console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Слухач видалено');
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      console.log('Click on Backdrop!');
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
