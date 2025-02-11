import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginView from './LoginView';
import SignupView from './SignupView';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginView />
      <SignupView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
