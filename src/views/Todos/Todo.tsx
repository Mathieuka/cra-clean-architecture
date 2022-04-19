import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../../infrastructure/services/api';

function Todo() {
  const query = useQuery('todos', api.todos.getAll);
  console.log('query', query);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edits <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Todo;
