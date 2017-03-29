import React, {
	Component
} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Footer from '../Common/Footer'

const styles = {
	position: 'absolute',
	left: 0,
	top: 0
};

const style = {
	height: 100,
	width: 100,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block',
	overflow: 'hidden'
};

const styleH3 = {
	height: '40px',
	lineHeight: '40px',
	textAlign: 'center',
	background: '#00bcd4',
	color: '#fff'
};

class App extends Component {
	render() {
		return (
			<MuiThemeProvider style={styles}>
				<div>
					<h3 style={styleH3}>welcome</h3>
					<Paper style={style} zDepth={1} circle={true}>
						<img alt="图标" width="100%" src="https://avatars3.githubusercontent.com/u/2168473?v=3&s=460" />
					</Paper>
					<Footer />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App