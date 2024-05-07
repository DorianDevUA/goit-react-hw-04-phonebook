import styled from '@emotion/styled';

export const TodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px dashed red;
`;
