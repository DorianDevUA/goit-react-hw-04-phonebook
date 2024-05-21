import styled from 'styled-components';

export const ContactInfo = styled.div`
  svg {
    margin-right: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const ContactName = styled.p`
  max-width: 189px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContactPhone = styled.p`

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
