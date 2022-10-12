import React from 'react';
import Todo from '../todo/Todo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const List = () => {
  // list에 붙이기 위해 useSelector로 데이터를 불러온다.
  const todos = useSelector((state) => state.todos);

  return (
    <StList>
      {/* 그리고 새로 작성하는 데이터가 담긴 todos를
          붙이기 위해 map함수를 이용, 새로운 배열을 만든다. */}
      {todos?.map((item) => {
        return <Todo key={item.id} title={item.title} />;
      })}
    </StList>
  );
};

export default List;
