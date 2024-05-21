import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
`;
