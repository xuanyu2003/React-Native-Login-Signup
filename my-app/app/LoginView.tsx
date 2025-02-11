import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
  };

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginNavigationProp>(); // use the type here

  const handleLogin = () => {
    console.log('Login button pressed');
  };

  const handleSignup = () => {
    // Navigate to Signup screen
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />

    
    <TouchableOpacity  onPress={handleSignup}>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  link: {
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginView;
