import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <input type="text" name="name" required />
      </>
    );
  }
}
