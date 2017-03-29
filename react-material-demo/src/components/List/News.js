import React from 'react';
import Avatar from 'material-ui/Avatar';
import {
  List,
  ListItem
} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import $ from 'n-zepto'
import Loading from '../Common/Loading'

class ListExampleChat extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      dataList: []
    };

    this.timer = null;
  }
  componentWillMount() {
    this.fetchData();
  }
  componentWillUnmount() {}
  fetchData() {
    let _this = this;
    $.ajax({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      data: {
        wd: 'a'
      },
      dataType: 'jsonp',
      jsonp: 'cb',
      success(res) {
        setTimeout(() => {
          if (_this.refs.loading1) {
            _this.setState({
              dataList: res.s
            });
            //loading消失
            _this.refs.loading1.hideLoading();
          }
        }, 1000)
      }
    })
  }
  render() {

    let itemArr = [];
    this.state.dataList.map((val, index) => {
      return itemArr.push(<ListItem key={index}
          primaryText={val}
          leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
          rightIcon={<CommunicationChatBubble />}
        />);
    });
    return (
      <div>
        <List>
          <Subheader>最热新闻</Subheader>
          <Loading ref="loading1" />
          {itemArr}
          {itemArr}
        </List> 
      < Divider / >
    </div>
    )
  }
}

export default ListExampleChat;