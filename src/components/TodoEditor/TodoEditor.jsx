import { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    text: '',
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { text } = this.state;
    this.props.onSubmit(text);

    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Додати</button>
      </form>
    );
  }
}
