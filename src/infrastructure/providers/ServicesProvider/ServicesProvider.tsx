import { createContext } from 'react';
import api from '../../services/api';
import { Services } from '../../services/api';

interface ServicesContext {
  api: Services;
}

export const ServiceContext = createContext<ServicesContext>(
  {} as ServicesContext
);

export const useServicesContext = () => ({ api });

const ServicesProvider = ({ children }: { children: JSX.Element }) => {
  const context = useServicesContext();
  return (
    <ServiceContext.Provider value={context}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServicesProvider;
