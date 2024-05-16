import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SearchField = styled.input`
  width: 250px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
`;
