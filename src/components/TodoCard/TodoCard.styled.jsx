import styled from '@emotion/styled';

export const Title = styled.h2`
  color: ${props => props.theme.colors.primaryText};
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.secondaryText};
`;

export const CloseBtn = styled.button`
  padding: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.green};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
