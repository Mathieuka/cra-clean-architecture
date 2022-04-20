import { useQuery, UseQueryResult } from 'react-query';
import useServices from '../../../infrastructure/providers/ServicesProvider/useServices';
import { createContext, useMemo } from 'react';

export const TodosContext = createContext<UseQueryResult<any, unknown>>(
  {} as UseQueryResult<any, unknown>
);

const useTodosContext = () => {
  const { todosApi } = useServices();

  const response = useQuery('todos', todosApi.getAll);

  const contextValue = useMemo(
    () => ({
      ...response,
    }),
    [response]
  );

  return contextValue;
};

const TodosProvider = ({ children }: { children: JSX.Element }) => {
  const context = useTodosContext();

  return (
    <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
  );
};

export default TodosProvider;
