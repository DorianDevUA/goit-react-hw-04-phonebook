export function Filter({ value, onChange }) {
  return (
    <label>
      <span>Find contacts by name:</span>
      <input
        type="text"
        name="filter"
        value={value}
        placeholder="Search"
        onChange={onChange}
      />
    </label>
  );
}
