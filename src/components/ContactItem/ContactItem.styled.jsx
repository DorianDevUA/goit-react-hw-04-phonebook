import styled from 'styled-components';

export const ContactCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
`;

export const Info = styled.div`
  svg {
    margin-right: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const Name = styled.p`
  max-width: 189px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DeleteBtn = styled.button`
  /* font-weight: bold; */
  /* text-transform: uppercase; */
  margin-left: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 2px;
`;
