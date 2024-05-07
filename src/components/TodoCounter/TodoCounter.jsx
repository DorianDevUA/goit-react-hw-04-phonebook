import PropTypes from 'prop-types';

export function Counter({ total, completed }) {
  return (
    <div>
      <p>Загальна к-ть: {total}</p>
      <p>К-ть виконаних: {completed}</p>
    </div>
  );
}

Counter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
