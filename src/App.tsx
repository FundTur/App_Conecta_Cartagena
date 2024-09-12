import React from 'react';
import WelcomeScreen from './interface/screens/Welcome';
import StoreProvider from './interface/components/store/StoreProvider';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigationStack from './interface/navigation/AuthNavigationStack';
import { LanguageProvider } from './interface/components/language/LanguageProvider';

const App = () => {
  return (
    <StoreProvider>
      <LanguageProvider>
        <NavigationContainer>
          <AuthNavigationStack />
        </NavigationContainer>
      </LanguageProvider>
    </StoreProvider>
  );
};

export default App;