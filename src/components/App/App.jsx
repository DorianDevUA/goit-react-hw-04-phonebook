import { Component } from 'react';
import { Container } from './App.styled';
import { Description } from '../Description/Description';

export class App extends Component {
  state = { };

  render() {
    return (
      <Container>
        <Description />
      </Container>
    );
  }
}

//! |Комбінації клавіш VSCode
// |-----------------------------------
// |Ctrl + P
// |Пошук файлів у проєкті
// |-----------------------------------
// |Ctrl + B
// |Відкриття/Закриття Primary Side Bar (Explorer | Файл менеджер)
// |-----------------------------------
// |Ctrl + `
// |Відкриття/Закриття Terminal
// |-----------------------------------
