import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Menu from '../screens/Menu';

const screens = {
    Home: {
        screen: WelcomeScreen
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    Menu: {
        screen: Menu
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);