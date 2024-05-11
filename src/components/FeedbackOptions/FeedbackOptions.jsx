import { FeedbackBtn, Feedbacks } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Feedbacks>
      {options.map(prop => (
        <FeedbackBtn
          key={prop}
          type="submit"
          onClick={() => onLeaveFeedback(prop)}
        >
          {prop}
        </FeedbackBtn>
      ))}
    </Feedbacks>
  );
}
