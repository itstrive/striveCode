import React, {Component} from 'react'

import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './header'

class News extends Component{
	_backChange=()=>{
		this.props.navigator.pop();
	}
	render(){
		return (<View>
			<Header title="News"/>
			<Button onPress={this._backChange} title="返回"/>
			<View style={styles.textContainer}>
				<Text>From List: {this.props.data.id}</Text>
			</View>
		</View>)
	}
}

const styles=StyleSheet.create({
	textContainer:{
		marginVertical:100,
		alignItems:'center',
		justifyContent:'center'
	}
});

export default News;