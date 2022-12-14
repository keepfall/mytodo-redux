import React from 'react';
import Layout from '../components/layout/Layout';
import Form from '../components/form/Form';
import List from '../components/list/List';

const TodoList = () => {
  return (
    <Layout>
      <Form />
      <List />
    </Layout>
  );
};

export default TodoList;
