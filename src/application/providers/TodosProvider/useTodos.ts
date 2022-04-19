import { useContext } from 'react';
import { TodosContext } from './TodosProvider';

const useTodos = () => useContext(TodosContext);

export default useTodos;
