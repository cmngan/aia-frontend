import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from 'hooks';
import { userListener } from 'integration';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet,
} from 'react-native';
import Navigation from './src/navigation';

function App() {
  return (
    <KeyboardAvoidingView
      style={styles.flex1}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <SafeAreaView style={styles.flex1}>
        <UserProvider userListener={userListener}>
          <Navigation />
        </UserProvider>
        <StatusBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 }
});

export default App;
