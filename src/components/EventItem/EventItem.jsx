import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventDuration, formatEventStart } from '../../utils';
import { iconSize } from '../../constants';
import css from './EventItem.module.css';

export function EventItem({ topic, location, speaker, type, start, end }) {
  const formatedStartTime = formatEventStart(start);
  const formatedDurationTime = formatEventDuration(start, end);
  return (
    <>
      <h2 className={css.title}>{topic}</h2>
      <p>
        <FaUserAlt className={css.icon} size={iconSize.md} />
        {speaker}
      </p>
      <p>
        <FaMapMarkerAlt className={css.icon} size={iconSize.md} />
        {location}
      </p>
      <p>
        <FaCalendarAlt className={css.icon} size={iconSize.md} />
        {formatedStartTime}
      </p>
      <p>
        <FaClock className={css.icon} size={iconSize.md} />
        {formatedDurationTime}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </>
  );
}

EventItem.propTypes = {
  topic: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
