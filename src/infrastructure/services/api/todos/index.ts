import axios from 'axios';

export default {
  getAll: async () =>
    await axios.get('https://jsonplaceholder.typicode.com/todos'),
};
