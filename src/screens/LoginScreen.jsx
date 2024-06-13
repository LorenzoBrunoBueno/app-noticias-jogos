import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../config/firebase';   
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../config/styles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
         signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { navigation.navigate('News');
         }) 
         .catch((error) => {
             setError(error.message);
            });
         };

         return (
                <View style={styles.innerContainer}>
                    <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                    <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
                    <Button title="Login" onPress={handleLogin} />
                    {error ? <Text>{error}</Text> : null}
                    </View>
                 );
                }