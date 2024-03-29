import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin, getUserDetails} from '../redux/authActions';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { Alert } from 'react-native';

const Login = () => {
  // const {loading, error} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [tokenValue, setTokenValue] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const clearStorageValue = () => {
      var token = AsyncStorage.removeItem('userToken');
      console.log('cleared token hopefully', token);
      return token;
    };

    clearStorageValue();
  }, []);

  const onError = (errors, e) => {
    return console.log(errors);
  };

  const onSubmit = data => {
    console.log(data);
    let {email, password} = data;

    dispatch(userLogin(data));
    const getStorageValue = async () => {
      try {
        var token = await AsyncStorage.getItem('userToken');

        setTokenValue(token);
        console.log('tokenvalueeee', tokenValue);

        navigate.navigate('Home');

        return token;
      } catch (error) {
        console.log(error);
      }
    };

    getStorageValue();

    dispatch(getUserDetails(data));
  };


  // if (tokenValue) {
  //       navigate.navigate('Home')
  //     }
  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.usernameInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Username'
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.passwordInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Password'
            />
          )}
          name="password"
        />
        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={styles.registerButton}>
          <Text style={styles.registerText}>Login</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
  usernameInput: {
    height: 40,
    margin: 12,
    marginTop: 40,
    borderWidth: 1.5,
    borderColor: 'gold',
    padding: 10,
    position: 'relative',
    width: '75%',
    left: '10%',
    top: '20%',
    color: 'white',
  },
  passwordInput: {
    height: 40,
    margin: 12,
    marginTop: 60,
    borderWidth: 1,
    borderColor: 'gold',
    padding: 10,
    position: 'relative',
    width: '75%',
    left: '10%',
    top: '15%',
    color: 'white',
  },
  registerButton: {
    padding: 1,
    width: '25%',
    borderWidth: 1,
    borderColor: 'gold',
    height: '6%',
    position: 'absolute',
    left: '15%',
    bottom: '40%',
    color: 'white',
  },
  registerText: {
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    left: '8%',
  },
  loginButton: {
    borderColor: 'gold',
  },
  loginText: {
    fontFamily: 'Cochin',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    left: '19%',
    top: '1%',
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

export default Login;
