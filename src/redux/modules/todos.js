const ADD_TODO = 'ADD_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const initialState = [
  { id: 1, title: 'reudx를 사용해보자.' },
  { id: 2, title: 'reudx가 어렵다.' },
];

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
