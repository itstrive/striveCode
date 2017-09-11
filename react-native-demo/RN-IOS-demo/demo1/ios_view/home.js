import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  AlertIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import News from './news.js'


import Header from './header.js'

const {width, height}=Dimensions.get('window');

class Home extends Component{
	constructor(props){
		super(props);
		
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var data=  [
	        {
	            "id": "54000019900401137X",
	            "img": "http://dummyimage.com/1280x768/b5523b",
	            "title": "Gqpvkv Klwmmxpk Ufxld Phkuwhcy"
	        },
	        {
	            "id": "540000198803081433",
	            "img": "http://dummyimage.com/1280x768/c80f23",
	            "title": "Inkkg Ckpns Rhevir VfoudLviioyd Wfgwite Uhuyszoka"
	        },
	        {
	            "id": "230000197410118592",
	            "img": "http://dummyimage.com/1280x768/babc54",
	            "title": "Mudvcb Nbkl Abg Thkp Nbw BneHjmuwnigt Tmg Tkcttcusp Ojfyeyysgp"
	        },
	        {
	            "id": "530000199803284823",
	            "img": "http://dummyimage.com/1280x768/ed6c02",
	            "title": "Etxmi Cqpjgr Txibn Wufojjdcvj Rzjkn"
	        },
	        {
	            "id": "340000197911205980",
	            "img": "http://dummyimage.com/1280x768/6e10b8",
	            "title": "Lrdvybtj Dimwgqslgk Jmzlxy Tvxia Wzebvsfbz Bleywe"
	        },
	        {
	            "id": "520000200310174574",
	            "img": "http://dummyimage.com/1280x768/410cbd",
	            "title": "Pwo Ihcf Iybpssfbw Fgnqyiluic Fxipb"
	        },
	        {
	            "id": "350000200502166040",
	            "img": "http://dummyimage.com/1280x768/d2a04c",
	            "title": "Csguqzn Gtmf Lhewpmyr Mqgi Hprn"
	        },
	        {
	            "id": "350000201502060224",
	            "img": "http://dummyimage.com/1280x768/4bf2aa",
	            "title": "Ivboggg Sizvmdpsx Ebbn FwxhjIdaf Nkssufhe Ojdwhjo Uyjjlxx"
	        }
	    ];
		this.state = {
			dataSource: ds.cloneWithRows(data),
		};
	}
	_changePage=(rowItem)=>{
		this.props.navigator.push({
			name:'news',
			component:News,
			passProps:{
				data:rowItem
			}
		});
	}
	_renderRow=(rowItem)=>{
		return (<View style={styles.rowBox}>
			<View style={styles.title}>
				<Text>{rowItem.title}</Text>
			</View>
			<View>
				<Image resizeMode="cover" source={{uri:rowItem.img}} style={styles.img} />
				<Icon onPress={this._changePage.bind(this,rowItem)} style={styles.icon} size={100} name="ios-play" color="#4F8EF7" />
			</View>
		</View>)
	}

	render(){
		return (<View style={styles.container}>
			<Header title="Home" />
			<ListView
		      	dataSource={this.state.dataSource}
		      	renderRow={this._renderRow}
		      	automaticallyAdjustContentInsets={false}
		      	showsVerticalScrollIndicator={false}
		    />
		</View>)
	}
}

const styles=StyleSheet.create({
	icon:{
		position:'absolute',
		backgroundColor:'transparent',
		left:(width)/2,
		top:(width * 0.6-100)/2
	},
	img:{
		width:width,
		height:width * 0.6
	},
	container:{
		flex:1,
		backgroundColor:'#fff',
		marginTop:20
	},
	rowBox:{
		alignItems:'center',
		justifyContent:'center'
	},
	title:{
		height:40,
		alignItems:'center',
		justifyContent:'center'
	}
});


export default Home;