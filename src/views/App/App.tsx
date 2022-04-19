import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todos from '../Todos';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
