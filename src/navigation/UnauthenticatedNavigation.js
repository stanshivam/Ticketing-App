import { StackNavigator } from 'react-navigation';
import TransitionConfiguration from '../utility/transition';

// Unauthenticated stack
const UnauthenticatedStack = StackNavigator({
  
}, {
  headerMode: 'none',
  transitionConfig: TransitionConfiguration
});
export default UnauthenticatedStack;

