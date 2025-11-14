import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');


const primaryColor = '#550D08'; 
const placeholderColor = '#666666'; 


const logoSource = require('../assets/images/LogoSirene.png');

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image 
          source={logoSource} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>

      
      <View style={styles.loginCard}>
        <Text style={styles.title}>LOGIN</Text>
        
        
        <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CPF/Matrícula</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={placeholderColor}
              keyboardType="numeric"
            />
        </View>

        
        <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={placeholderColor}
              secureTextEntry={true}
            />
        </View>

        
        <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login Pressionado')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => console.log('Esqueceu Senha Pressionado')}>
          <Text style={styles.forgotPassword}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  header: {
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.35, 
    height: width * 0.35, 
    marginTop: 40,
  },
  loginCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 40,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: placeholderColor,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#000000',
  },
  loginButton: {
    backgroundColor: primaryColor,
    width: '80%',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: primaryColor,
    fontSize: 14,
  },
});

export default LoginScreen;