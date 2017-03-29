import React from 'react';
import Drawer from 'material-ui/Drawer';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {
  NavLink
} from 'react-router-dom'

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  handleClose = () => this.setState({
    open: false
  });

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Paper>
          <Menu>
            <MenuItem onTouchTap={this.handleClose}>
                <NavLink to="/" activeStyle={{fontWeight: 'bold',color: 'red'}}>
                  主页
                </NavLink>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
                <NavLink to="/about" activeStyle={{fontWeight: 'bold',color: 'red'}}>
                  关于我们
                </NavLink>
            </MenuItem>
          
            <MenuItem onTouchTap={this.handleClose}>
                <NavLink to="/list" activeStyle={{fontWeight: 'bold',color: 'red'}}>
                  热点新闻
                </NavLink>
            </MenuItem>
          </Menu>
        </Paper>
        </Drawer>
      </div>
    );
  }
}