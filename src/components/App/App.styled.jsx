import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  /* Приклад використання значень з теми(theme) у css  */
  color: ${({theme}) => theme.colors.primaryText};
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => `${props.theme.colors.primaryBackground}`};
`;
