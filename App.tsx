import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

// Crie uma instância de QueryClient
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // Envolva o App com QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;