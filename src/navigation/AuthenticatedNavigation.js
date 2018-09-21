import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import DrawerContainer from '../containers/drawer/DrawerContainer';
import TransitionConfiguration from '../utility/transition';
import App from '../../App';

// appointmentStack stack
const appointmentStack = StackNavigator({
  HomeComponent: { screen: App },
}, {
  headerMode: 'none',
  transitionConfig: TransitionConfiguration,
  contentOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor: 'purple',
  },
});

const DrawerStack = DrawerNavigator({
  appointmentStack: {
    screen: appointmentStack
  },
}, {
  headerMode: 'none',
  gesturesEnabled: false,
  contentComponent: DrawerContainer,
  drawerBackgroundColor: 'transparent',
  drawerWidth: 240,
  useNativeAnimations: true
});

export default DrawerStack;

