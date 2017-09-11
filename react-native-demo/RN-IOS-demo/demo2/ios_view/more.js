import React, {Component} from 'react'

import {
	StyleSheet,
	View,
	Text,
	FlatList,
	Dimensions,
	PixelRatio,
	TouchableOpacity,
	NavigatorIOS
} from 'react-native'

import request,{config} from './common'
import Detail from './detail'

const {width, height}=Dimensions.get('window');

let jokeArr=[];

class MoreView extends Component{
	constructor(props){
		super(props);

		this.state={
			data:[],
			refreshing:true
		};
	}
	componentDidMount(){
		this._fetchData();
	}
	_fetchData=()=>{
		request.get(config.JokeTextUrl,(data)=>{
			jokeArr=JSON.parse(data).data.concat(jokeArr);
			this.setState({
				data:jokeArr,
				refreshing:false
			});
		});
	}
	_fnDetail=(item)=>{
		//alert(this.props.navigator)
		this.props.navigator.push({
			component:Detail,
			title:'笑话详情',
			passProps:{data:item}
		})
	}
	_renderItem=({item})=>{
		return <TouchableOpacity onPress={()=>this._fnDetail(item)} key={item.hashId}>
			<View style={styles.lineBox}>
				<Text numberOfLines={1} style={styles.lineText}>{item.content}</Text>
			</View>
		</TouchableOpacity>
	}
	_separatorComponent=()=>{
		return (<View style={styles.separatorLine}></View>) 
	}
	_reFreshDown=()=>{
		this._fetchData();
	}
	render(){
		return (<View style={styles.contianer}>
			<FlatList
				data={this.state.data}
				renderItem={this._renderItem}
				automaticallyAdjustContentInsets={false}
				ItemSeparatorComponent={this._separatorComponent}
				onRefresh={this._reFreshDown}
				refreshing={this.state.refreshing}
			/>
		</View>)
	}
}

class More extends Component{
	render(){
		return (<NavigatorIOS
	        ref='jokeNav'
	        initialRoute={{
	          component: MoreView,
	          title: '笑话专栏'
	        }}
	        style={{flex: 1}}
	      />)
	}
}

const styles=StyleSheet.create({
	lineText:{
		letterSpacing:1,
	},
	lineBox:{
		padding:10
	},
	separatorLine:{
		width:width,
		height:1/PixelRatio.get(),
		backgroundColor:'#282828'
	},
	contianer:{
		flex:1,
		marginTop:60
	}
});

export default More;