import axios from 'axios';

export class JsonPlaceholder {
  public async getAll(): Promise<any> {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  }
}

export class OtherTodosService {
  public async getAll(): Promise<any> {
    return new Promise((res) => {
      setTimeout(() => {
        res({ todos: ['todos1', 'todos2'] });
      }, 500);
    });
  }
}
