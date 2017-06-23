react-navigation : 你可以认为是路由，导航都可以，官方说跨平台，目前我只测试了android端

把一下代码替换到你的 index.android.js里面

> 记得:  yarn add react-navigation

```javascript
import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = ({
    navigation
  }) => ({
    title: `聊天和 ${navigation.state.params.user}`,
  });
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const {
      navigate
    } = this.props.navigation;
    return (<View>
      <Text>Hello, Navigation!</Text>
      <Button onPress={() => navigate('Chat',{user:'Strive'})} title="去聊天" />
    </View>)
  }
}

const HelloReactNative = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: ChatScreen
  },
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
```

