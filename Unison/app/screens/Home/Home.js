import React from 'react';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const Home = () => {
  const [userToken, setUserToken] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigation();

  const getStorageValue = async () => {
    try {
      var email = await AsyncStorage.getItem('email');
      var token = await AsyncStorage.getItem('userToken');

      console.log('homie email', email);
      console.log('homie token', token);
      setUserToken(token);
      setEmail(email);
      return token;
    } catch (error) {
      console.log(error);
    }
  };

 

  

  
    const fetchCurrentUser = async () => {
      console.log('fetch', email);
      try {
        let token = JSON.parse(userToken);

        let response = await fetch(
          `http://10.0.2.2:5050/users/currentUser/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log('Profile:', response);
        if (response.ok) {
          let data = await response.json();
          console.log('Profile:', data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
  

   useEffect(() => {
getStorageValue();
  }, [])
if (userToken && email) {
    fetchCurrentUser();
  }
  return (
    <Text style={{color: 'black'}}>
      HomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfgggeHomffgfgfgfggge
    </Text>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
