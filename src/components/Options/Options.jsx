export function Options({ options, onLeaveFeedback }) {
  return options.map(prop => (
    <button
      key={prop}
      type="submit"
      onClick={() => onLeaveFeedback(prop)}
    >
      {prop}
    </button>
  ));
}
