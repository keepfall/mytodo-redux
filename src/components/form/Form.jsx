import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';

const StForm = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  gap: 20px;
  border: 1px solid black;
`;

const Form = () => {
  const dispatch = useDispatch();
  // 새로운 데이터를 기존 데이터에 추가하기 위해서 useSelector로 불러낸다.
  const todos = useSelector((state) => state.todos);
  // input에서 입력하는 값을 담아주는 빈 state를 만든다.
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    // input에 입력하는 정보를 타겟(?), 타겟된 값을 setTitle에 넣어준다.
    const { value } = e.target;
    setTitle(value);
  };

  const onClick = () => {
    // 조건문으로 title의 값이 공백이면 얼럿을 띄어주세요.
    // dispatch가 조건문 앞에 있으면 공백이 추가 된 후 조건문이 작동하기 때문에
    // 조건문을 dispatch 앞에 두고 공백을 입력하지 못 하게 막아준다.
    if (title === '') return alert('내용을 입력해주세요.');
    dispatch(addTodo({ id: todos.length + 1, title: title }));
  };

  return (
    <StForm>
      <label>Todos의 제목을 입력하세요.</label>
      <input type="text" onChange={onChange} required />
      {/* required가 안먹힘 */}
      <button onClick={onClick}>추가하기</button>
    </StForm>
  );
};

export default Form;
