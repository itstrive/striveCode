import React, {
	Component
} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../Common/Header'
import Card from './Card'
import DatePicker from './DatePicker'
import Tabs from './Tabs'
import Footer from '../Common/Footer'



class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					<Card />
					<Tabs />
					<DatePicker />
					<Footer />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App