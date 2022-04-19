import axios from 'axios';

export interface Todos {
  getAll: () => Promise<any>;
}

const todos: Todos = {
  getAll: async () =>
    await axios.get('https://jsonplaceholder.typicode.com/todos'),
};

export default todos;
