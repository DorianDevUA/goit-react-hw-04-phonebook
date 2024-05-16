import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;

  input {
    padding: ${({ theme }) => theme.spacing(1)};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 2px;
  }
`;

export const SubmitBtn = styled.button`
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 2px;
`;
