import styled from "styled-components";

export const Feedbacks = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 0;
`

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }
`
