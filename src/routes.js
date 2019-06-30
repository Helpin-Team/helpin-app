import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import { FluidNavigator } from 'react-navigation-fluid-transitions';

import SignIn from '~/pages/Login/SignIn';
import SignUp from '~/pages/Login/SignUp';
import ResetPassword from '~/pages/Login/ResetPassword';
import Splash from '~/pages/Login/Splash';

import Home from '~/pages/Home';
import Settings from '~/pages/Settings';

import Forum from '~/pages/Forum';
import Posts from '~/pages/Forum/Posts';

import { colors } from '~/theme';

const Login = createAppContainer(FluidNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ResetPassword: { screen: ResetPassword },
}));

Login.navigationOptions = {
  headerStyle: {
    display: 'none',
  },
};

const ForumContainer = createAppContainer(FluidNavigator({
  Forum: { screen: Forum },
  Posts: { screen: Posts },
}));

ForumContainer.navigationOptions = {
  headerStyle: {
    display: 'none',
  },
};

const Routes = createAppContainer(
  createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
    Home: { screen: Home },
    Settings: { screen: Settings },
    Forum: { screen: ForumContainer },
  }, {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTintColor: colors.darkTransparent,
    },
  }),
);

export default Routes;
