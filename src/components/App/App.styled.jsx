import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1024px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(1)};
`;
