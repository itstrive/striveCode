import React, {
	Component
} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Footer from '../Common/Footer'
import News from './News'

const styles = {
	position: 'absolute',
	left: 0,
	top: 0
};

class App extends Component {
	render() {
		return (
			<MuiThemeProvider style={styles}>
				<div>
					<News />
					<Footer />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App