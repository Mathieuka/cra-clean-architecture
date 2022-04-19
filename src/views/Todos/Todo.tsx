import React from 'react';
import useTodos from '../../application/providers/TodosProvider/useTodos';

function Todo() {
  const { data } = useTodos();

  console.log('data', data);
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
