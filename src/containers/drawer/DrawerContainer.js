import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


// let SideMenuWidth = 300;

//In future we might make it a container (connected with redux)
export default class DrawerContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.items[0].routes.length) {
      this.findActiveItem();
    }
  }


  findActiveItem() {
    const route = this.props.items[0].routes;
    const activeItem = route[route.length - 1];
    this.setState({ activeItemKey: activeItem.routeName });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.sideMenu}>
          <View style={{ backgroundColor: '#4CAF50', alignItems: 'center', marginBottom: 30 }}>
            {/* <Image source={deetsLogo} style={{ resizeMode: 'contain', height: 40, width: 100 }} /> */}
          </View>
          <View style={{}}>
            <TouchableOpacity
              style={[styles.menu]}
              onPress={() => navigation.navigate('homeScreen')}
            >
              <Text style={styles.menuText} type='h5White'>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
