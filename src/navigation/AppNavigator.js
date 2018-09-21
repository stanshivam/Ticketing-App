import React from 'react'; 
import { StackNavigator } from 'react-navigation';
import UnauthenticatedNavigation from './UnauthenticatedNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';

const PrimaryNav = StackNavigator({
  unauthenticatedStack: { screen: UnauthenticatedNavigation },
  authenticatedStack: { screen: AuthenticatedNavigation },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'authenticatedStack'
});

export default PrimaryNav;

