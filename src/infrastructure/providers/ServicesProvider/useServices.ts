import { useContext } from 'react';
import { ServiceContext } from './ServicesProvider';

const useServices = () => useContext(ServiceContext);

export default useServices;
