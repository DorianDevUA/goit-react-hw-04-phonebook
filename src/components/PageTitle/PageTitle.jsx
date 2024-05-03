import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

export function PageTitle({ title }) {
  return <h1 className={css.title}>{title}</h1>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
