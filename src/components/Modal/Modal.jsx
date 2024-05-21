import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal ComponentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
    console.log('Слухач додано');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
    console.log("Слухач видалено");
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      console.log("Натиснули ESC");
      this.props.onClose();
    }
  }

  handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      console.log('Click on Backdrop!');
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}
