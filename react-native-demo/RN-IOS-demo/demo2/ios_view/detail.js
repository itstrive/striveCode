import React, {Component} from 'react'

import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class Detail extends Component{
	render(){
		return (<View>
			<View style={styles.textContainer}>
				<Text style={styles.jokeCon}>{this.props.data.content}</Text>
			</View>
		</View>)
	}
}

const styles=StyleSheet.create({
	jokeCon:{
		padding:10,
		letterSpacing:1,
		fontSize:20,
		lineHeight:30
	},
	textContainer:{
		marginVertical:100,
		alignItems:'center',
		justifyContent:'center'
	}
});

export default Detail;