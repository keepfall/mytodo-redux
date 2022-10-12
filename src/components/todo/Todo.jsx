import React from 'react';
import styled from 'styled-components';

const StTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 60px;
  margin-top: 20px;
  border: 1px solid black;
`;

const Todo = (props) => {
  // todos에 들어갈 제목을 List 컴포넌트에서 props로 받아온다.
  return <StTodo>{props.title}</StTodo>;
};

export default Todo;
