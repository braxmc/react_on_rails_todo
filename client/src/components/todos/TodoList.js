import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <div>
    {
      todos.map( t => 
        <Todo 
          key={t.id}
          {...t}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )
    }
  </div>
)

export default TodoList;