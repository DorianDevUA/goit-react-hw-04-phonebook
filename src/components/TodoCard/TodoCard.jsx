import PropTypes from 'prop-types';
import { Description, CloseBtn } from './TodoCard.styled';

export function TodoCard({
  id,
  text,
  completed,
  onDeleteTodo,
  onToggleCompleted,
}) {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(id)}
      />
      <Description>{text}</Description>
      <CloseBtn onClick={() => onDeleteTodo(id)}>Видалити</CloseBtn>
    </>
  );
}

TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
