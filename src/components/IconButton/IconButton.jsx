import PropTypes from 'prop-types';

export function IconButton({ children, onClick, ...allyProps }) {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.defautProps = {
  children: null,
  onClick: () => null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
