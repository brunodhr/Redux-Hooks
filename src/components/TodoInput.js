import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { addTodoAction } from '../redux';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo));

  const onChange = event => {
    setTodo(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (todo.trim() === '') return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Adicione um novo dever"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};

export default TodoInput;
