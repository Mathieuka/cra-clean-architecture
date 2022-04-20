import { OtherTodosService, JsonPlaceholder } from './jsonPlaceholder';

export interface iTodos {
  getAll: () => Promise<any>;
}

class TodosApi implements iTodos {
  private todosServices;

  constructor(todosServices: iTodos) {
    this.todosServices = todosServices;
  }

  getAll = async (): Promise<unknown> => {
    try {
      return await this.todosServices.getAll();
    } catch (e) {
      console.log(e);
    }
  };
}

export default new TodosApi(new OtherTodosService());
