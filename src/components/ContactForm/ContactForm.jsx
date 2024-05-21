import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { StyledForm, SubmitBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameImputId = nanoid();
  numberImputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameImputId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id={this.nameImputId}
          onChange={this.handleChange}
          required
        />
        <label htmlFor={this.numberImputId}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          id={this.numberImputId}
          onChange={this.handleChange}
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
