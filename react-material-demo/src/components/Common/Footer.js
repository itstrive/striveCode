import React, {
  Component
} from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {
  blue500
} from 'material-ui/styles/colors';

import {
  Link
} from 'react-router-dom'

const recentsIcon = <ActionHome />;
const favoritesIcon = <ActionFlightTakeoff color={blue500} />;
const nearbyIcon = <IconLocationOn color={blue500} />;


const styles = {
  position: 'fixed',
  bottom: 0,
  zIndex: 10
};

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({
    selectedIndex: index
  });

  render() {
    return (
      <Paper style={styles} zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to="/">
            <BottomNavigationItem
              label="主页"
              icon={recentsIcon}
              onTouchTap={() => this.select(0)}
            />
          </Link>
          <Link to="/about">
              <BottomNavigationItem
                label="关于我"
                icon={favoritesIcon}
                onTouchTap={() => this.select(1)}
              />
          </Link>
          <Link to="/list">
            <BottomNavigationItem
              label="新闻"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;