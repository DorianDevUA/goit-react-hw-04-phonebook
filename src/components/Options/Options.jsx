export function Options({ options, totalFeedback, onLeaveFeedback, onResetFeedback }) {
  return (
    <>
      {options.map(prop => (
        <button key={prop} type="submit" onClick={() => onLeaveFeedback(prop)}>
          {prop}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button type="submit" onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </>
  );
}
