可配置的头部信息:

```javascript
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Vibration,
  TouchableHighlight
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

//----------------
class RecentChatsScreen extends React.Component {
  render() {
    return (<View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Strive' })}
        title="最近聊天"
      />
      <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.wrapper} onPress={()=>Vibration.vibrate([0,500,1000,500],true)}>
        <View style={styles.button}>
          <Text style={{textAlign:'center', color:'#fff'}}>震动</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper} onPress={()=>Vibration.cancel()}>
          <View style={styles.button}>
            <Text style={{textAlign:'center', color:'#fff'}}>取消震动</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>)
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (<View>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="所有聊天"
      />
    </View>)
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {
    screen: RecentChatsScreen
  },
  All: {
    screen: AllContactsScreen
  },
});
MainScreenNavigator.navigationOptions = {
  title: 'My主页',
  headerRight: <Button title="INFO"/>
};
//-------------------


class ChatScreen extends React.Component {
  static navigationOptions = ({
    navigation
  }) => {
    const {
      state,
      setParams
    } = navigation;
    const isInfo = state.params.mode === 'info';
    const {
      user
    } = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const HelloReactNative = StackNavigator({
  Home: {
    screen: MainScreenNavigator
  },
  Chat: {
    screen: ChatScreen
  },
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5
  },
  button: {
    backgroundColor: '#399',
    padding: 10,
    margin: 10
  },
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
```

