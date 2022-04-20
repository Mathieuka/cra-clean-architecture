import { createContext } from 'react';
import services from '../../services';
import { iTodos } from '../../services/todos/todosApi';

export interface Services {
  todosApi: iTodos;
}

export const ServiceContext = createContext<Services>({} as Services);

export const useServicesContext = () => {
  return services;
};

const ServicesProvider = ({ children }: { children: JSX.Element }) => {
  const context = useServicesContext();
  return (
    <ServiceContext.Provider value={context}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServicesProvider;
