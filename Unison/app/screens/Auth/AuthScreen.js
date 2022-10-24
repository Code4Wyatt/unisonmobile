import {View, Text, Pressable, StyleSheet} from 'react-native';
import logo from '../../assets/logo.png';
import {Image} from 'react-native';
import Palette from '../../assets/palette.svg';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../../components/Login';

const AuthScreen = () => {
  return (
    <View style={styles.authScreen}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.header}>UNISON</Text>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.slogan}>Share your sound</Text>
        <Login />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  header: {
    color: 'white',
    position: 'relative',
    left: '43.5%',
    top: '10%',
  },
  logo: {
    position: 'relative',
    top: '10%',
    left: '35%',
  },
  slogan: {
    color: 'white',
    position: 'relative',
    left: '36%',
    top: '10%',
  }
});

export default AuthScreen;
