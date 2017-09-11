import React, {Component} from 'react'

import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class News extends Component{
	_backChange=()=>{
		this.props.navigator.pop();
	}
	render(){
		return (<View>
			<View style={styles.textContainer}>
				<Text>From List: {this.props.data.hashId}</Text>
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