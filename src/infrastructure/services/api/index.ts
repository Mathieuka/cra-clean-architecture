import todos from './todos';
import { Todos } from './todos/index';

export interface Services {
  todos: Todos;
}

const services: Services = {
  todos,
};

export default services;
