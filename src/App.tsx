import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
