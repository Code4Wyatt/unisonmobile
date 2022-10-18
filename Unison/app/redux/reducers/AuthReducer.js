import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";
import { AsyncStorage } from '@react-native-community/react-native';
const authState = {
  isLoggedIn: false,
  redirect: false,
  user: {
    name: "",
    expires_at: "",
    jwttoken: "",
    authorities: [],
  },
};

export const getAuthState = () => {
    // const auth = localStorage.getItem("auth");
    _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('auth');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    console.log('getAuthState error', error)
  }
};
  try {
    const authobj = JSON.parse(auth);
    const { expires_at, jwttoken } = authobj.user;
    if (new Date(expires_at) > new Date()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
      return authobj;
    }
    return authState;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();

const authreducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.jwttoken}`;
        //   localStorage.setItem("auth", JSON.stringify(newAuthState));

          _storeData = async () => {
  try {
    await AsyncStorage.setItem(
      'auth',
      newAuthState
    );
  } catch (error) {
      console.log(error);
  }
};
      return newAuthState;

    case AuthActionType.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return authState;

    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.jwttoken}`;
        //   localStorage.setItem("auth", JSON.stringify(loginAuthState));
                 _storeData = async () => {
  try {
    await AsyncStorage.setItem(
      'auth',
      loginAuthState
    );
  } catch (error) {
      console.log(error);
  }
};
      return loginAuthState;

    default:
      return state;
  }
};

export default authreducer;