import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div>
    {
      todos.map( t => 
        <Todo 
          key={t.id}
          {...t}
        />
      )
    }
  </div>
)

export default TodoList;