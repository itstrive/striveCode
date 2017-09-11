import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';


class Header extends Component{
  componentDidMount(){
    //alert(this.props.btnBack)
    if(this.props.btnBack){
      alert(this.props.btnBack)
    }
  }
  render(){
    return (
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>{this.props.title} Header</Text>
      </View>
      )
  }
}

const styles=StyleSheet.create({
  headerBox:{
    flexDirection:'row',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#282828'
  },
  headerTitle:{
    color:'#fff'
  }
});

export default Header;