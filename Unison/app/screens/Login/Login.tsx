import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView 
} from 'react-native';
import {connect} from 'react-redux';
import logo from '../../assets/logo.png';

const Login = () => {
  const [username, onChangeUserName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
{/* <View
      style={{
        flexDirection: 'row',
        height: '100%',
        padding: 20,
        backgroundColor: 'black',
      }}> */}
      <Text style={styles.baseText}>UNISON</Text>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.subText}>Share your sound</Text>
      <TextInput
        style={styles.usernameInput}
        onChangeText={onChangeUserName}
        value={username}
        placeholder='Enter Username'
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        style={styles.passwordInput}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={password}
        placeholder='Enter Password'
        placeholderTextColor="#FFFFFF"
      />
      <Pressable
        onPress={() => Alert.alert('Hey')}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Text style={styles.memberText}>Not a member?</Text>
      <Pressable
        onPress={() => Alert.alert('Hey')}
        style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </Pressable>
        <View style={{ height: 20 }} />
    {/* </View> */}
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
        height: '100%',
        padding: 20,
        backgroundColor: 'black',
  },
  logo: {
    position: 'absolute',
    left: '40%',
    top: '10%',
    height: '40%'
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: '46%',
    top: '5%',
  },
  subText: {
    fontFamily: 'Cochin',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: '42%',
    top: '42%',
    marginTop: '10%',
  },
  memberText: {
    fontFamily: 'Cochin',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: '45%',
    top: '82%',
    marginTop: 60,
  },
  usernameInput: {
    height: 40,
    margin: 12,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'gold',
    padding: 10,
    position: 'absolute',
    width: '75%',
    left: '15%',
    top: '50%',
    color: 'white',
  },
  passwordInput: {
    height: 40,
    margin: 12,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'gold',
    padding: 10,
    position: 'absolute',
    width: '75%',
    left: '15%',
    top: '60%',
    color: 'white',
  },
  registerButton: {
    borderRadius: 1,
    padding: 1,
    width: '25%',
    borderWidth: 1,
    borderColor: 'gold',
    height: '6%',
    position: 'absolute',
    left: '45%',
    top: '95%',
  },
  registerText: {
    fontFamily: 'Cochin',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    left: '8%'
  },
  loginButton: {
    borderRadius: 1,
    padding: 1,
    width: '25%',
    borderWidth: 1,
    borderColor: 'gold',
    maxHeight: '60%',
    position: 'absolute',
    left: '45%',
    top: '75%',
    marginTop: '10%'
  },
  loginText: {
    fontFamily: 'Cochin',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    left: '19%',
    top: '1%'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
