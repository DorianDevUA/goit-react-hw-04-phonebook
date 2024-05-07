import PropTypes from 'prop-types';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodoList, TodoItem } from './TodoBoard.styled';

export function TodoBoard({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <TodoList>
      {todos.map(({ id, text, completed }) => {
        return (
          <TodoItem key={id}>
            <TodoCard
              id={id}
              text={text}
              completed={completed}
              onDeleteTodo={onDeleteTodo}
              onToggleCompleted={onToggleCompleted}
            />
          </TodoItem>
        );
      })}
    </TodoList>
  );
}

TodoBoard.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
