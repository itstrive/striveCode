import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
	textAlign: 'center'
};

import Drawer from './Drawer'

class AppBarExampleIcon extends React.Component {
	handleToggle() {
		this.refs.drawer1.handleToggle();
	}
	render() {
		return (<div>
			<AppBar titleStyle={styles}
			    title="React小站"
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
			  />
			 <Drawer ref="drawer1" />
		</div>)
	}
}

export default AppBarExampleIcon;