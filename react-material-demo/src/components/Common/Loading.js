import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class RefreshIndicatorExampleLoading extends React.Component {
  constructor(...args) {
    super(...args);

    this.showLoading = this.showLoading.bind(this);
    this.hideLoading = this.hideLoading.bind(this);

    this.state = {
      bShow: true
    };
  }
  showLoading() {
    this.setState({
      bShow: true
    })
  }
  hideLoading() {
    this.setState({
      bShow: false
    })
  }
  render() {
    let str = this.state.bShow ? 'block' : 'none';
    return (<div style={{display:str, textAlign:'center'}}>
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={style.refresh}
      />
    </div>)
  }
}

export default RefreshIndicatorExampleLoading;