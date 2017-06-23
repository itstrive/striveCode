DrawerNavigator 说俗一点，就是抽屉效果

```javascript
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Vibration,
  TouchableHighlight,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';

class MyHomeScreen extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({
      tintColor
    }) => (
      <Image
        source={require('./image/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }
  render() {
    return (<View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Go Drawer"
        /> 
        <Text>这里是主页...</Text>
        <ActivityIndicator size="large" animating={this.state.loading} />
      </View>);
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: '通知',
    drawerIcon: ({
      tintColor
    }) => (
      <Image
        source={require('./image/notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (<View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="返回到Home"
        />
        <Text>这里是通知页面...</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const HelloReactNative = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  }
}, {
  drawerWidth: 200,
  drawerPosition: 'right'
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
```

