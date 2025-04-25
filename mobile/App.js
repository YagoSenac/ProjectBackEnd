import AppRoutes from './src/navigation';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // mantém splash visível

export default function App() {
  useEffect(() => {
    async function prepare() {
      // simula carregamento de dados
      await new Promise(resolve => setTimeout(resolve, 2000));

      await SplashScreen.hideAsync(); // esconde o splash 
    }
    
    prepare();
  }, []);
  
  return (
    // seu AppRoutes ou componente principal
    <AppRoutes />
  );
}

  // Removed redundant return and JSX block
