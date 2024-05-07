import { Component } from 'react';
import { PageTitle } from '../PageTitle';
import { TodoBoard } from '../TodoBoard';
import { Counter } from '../TodoCounter';
import { TodoEditor } from '../TodoEditor';
import { TodoFilter } from '../TodoFilter';
import { Container } from './App.styled';
import initialTodoList from '../../todoList.json';

export class App extends Component {
  state = {
    todos: initialTodoList,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      }),
    }));

    // Тернарник;
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    //   ),
    // }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  getFiltredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  }

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const filtredTodos = this.getFiltredTodos();

    return (
      <Container>
        <PageTitle title="Megusta ToDo. Task management program." />
        <TodoEditor onSubmit={this.addTodo} />
        <Counter total={totalTodos} completed={completedTodos} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoBoard
          todos={filtredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
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
