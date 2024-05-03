import PropTypes from 'prop-types';
import { EventItem } from '../EventItem/EventItem';
import css from './EventBoard.module.css';

export function EventBoard({ items }) {
  return (
    <ul className={css.events}>
      {items.map(
        ({ id, name, location, speaker, type, time: { start, end } }) => {
          return (
            <li key={id} className={css.event}>
              <EventItem
                topic={name}
                location={location}
                speaker={speaker}
                type={type}
                start={start}
                end={end}
              />
            </li>
          );
        },
      )}
    </ul>
  );
}

EventBoard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
