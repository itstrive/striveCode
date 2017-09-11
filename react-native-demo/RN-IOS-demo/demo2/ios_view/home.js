import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  AlertIOS,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import News from './news.js'
import request,{config} from './common.js'

const {width, height}=Dimensions.get('window');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

let listData=[];

class Home extends Component{
	constructor(props){
		super(props);

		var d=[{
        	"id": "310000201406273740",
        	"img": "http://dummyimage.com/1280x768/f9362c",
        	"title": "Joke Fqqyzcib Yvnzf Tsnlghre Vbtiiornr Frglkiki"
    	},
    	{
        	"id": "37000020020802132X",
        	"img": "http://dummyimage.com/1280x768/e9f80b",
        	"title": "Umbd Hmlnvugan Ltij Cjknijv Mykqofsh EqrdpmocHvzfss Ldbfldbr Ocrxtp"
    	}];
		this.state = {
			dataSource: ds.cloneWithRows(d),
			isFirstLoading:true,
			down:false,
			up:false,
			isRefreshing:false
		};
	}
	componentDidMount(){
		this._fetchData();
	}
	_fetchData(){
		request.get(config.Jokeurl,(data)=>{
			if(this.state.down){
				listData=listData.concat(JSON.parse(data).data);
			}else if(this.state.up){
				listData=JSON.parse(data).data.concat(listData);
			}else{
				listData=JSON.parse(data).data;
			}
			this.setState({
				dataSource:ds.cloneWithRows(listData),
				isFirstLoading:false,
				isRefreshing:false
			});
		})
	}
	_changePage=(rowItem)=>{
		this.props.navigator.push({
			name:'news',
			component:News,
			passProps:{
				data:rowItem
			},
			barTintColor:'#282828'
		});
	}
	_renderRow=(rowItem)=>{
		return (<View style={styles.rowBox} key={rowItem.hashId}>
			<View style={styles.title}>
				<Text numberOfLines={2}>{rowItem.content}</Text>
			</View>
			<View>
				<Image resizeMode="cover" source={{uri:rowItem.url}} style={styles.img} />
				<Icon onPress={this._changePage.bind(this,rowItem)} style={styles.icon} size={100} name="ios-play" color="#4F8EF7" />
			</View>
		</View>)
	}
	_footerRnder=()=>{
		return <ActivityIndicator />
	}
	_fnEndReached=()=>{
		this.setState({
			down:true
		});

		this._fetchData();
	}
	_onRefresh=()=>{
		this.setState({
			up:true,
			isRefreshing:true
		});
		this._fetchData();
	}

	render(){
		return (<View style={styles.container}>
			{this.state.isFirstLoading?	
			<ActivityIndicator style={styles.firstLoading} animating={this.state.isFirstLoading} color="#000" size="large" />:
			<ListView
		      	dataSource={this.state.dataSource}
		      	renderRow={this._renderRow}
		      	automaticallyAdjustContentInsets={false}
		      	showsVerticalScrollIndicator={false}
		      	renderFooter={this._footerRnder}
		      	onEndReached={this._fnEndReached}  //当滚动到底部的时候
		      	onEndReachedThreshold={0}	//距离底部50像素开始加载
		      	refreshControl={
		      		<RefreshControl
		      			refreshing={this.state.isRefreshing}
			            onRefresh={this._onRefresh}
			            tintColor="#ff0000"
			            title="Loading..."
			            titleColor="#00ff00"
			            colors={['#ff0000', '#00ff00', '#0000ff']}
			            progressBackgroundColor="#ffff00"
			          />
		      	}
		    />
		    }
		</View>)
	}
}

const styles=StyleSheet.create({
	firstLoading:{
		marginVertical:100
	},
	icon:{
		position:'absolute',
		backgroundColor:'transparent',
		left:(width)/2,
		top:(width * 0.6-100)/2
	},
	img:{
		width:width,
		height:width * 0.6,
		backgroundColor:'#282828'
	},
	container:{
		flex:1,
		backgroundColor:'#fff',
		marginTop:60
	},
	rowBox:{
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#fff'
	},
	title:{
		height:40,
		backgroundColor:'#fff',
		alignItems:'center',
		justifyContent:'center'
	}
});


export default Home;