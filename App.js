import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from 'hooks';
import { userListener } from 'integration';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <UserProvider userListener={userListener}>
        <Navigation />
      </UserProvider>
    </SafeAreaProvider>
  );
}

export default App;
