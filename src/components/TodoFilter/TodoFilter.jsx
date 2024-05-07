import { PropTypes } from "prop-types"

export function TodoFilter({value, onChange}) {
  return (
    <label>
      Фільтр
      <input type="text" value={value} onChange={onChange}/>
    </label>

  )
}

TodoFilter.propTypes = {
  value: PropTypes.string.isRequired,
}
