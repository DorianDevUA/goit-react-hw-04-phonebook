import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;
