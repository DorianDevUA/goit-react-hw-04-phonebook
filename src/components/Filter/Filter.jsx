import PropTypes from 'prop-types';
import { Label, SearchField } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <Label>
      <span>Find contacts by name:</span>
      <SearchField
        type="text"
        name="filter"
        value={value}
        placeholder="Search"
        onChange={onChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
