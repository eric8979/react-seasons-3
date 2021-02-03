import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	// This is ONLY TIME "direct assignment" (this.state)
	// 	this.state = { lat: null, errorMessage: '' };
	// }

	state = { lat: null, errorMessage: '' };

	// lifeCycle method
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// "setState()" TO UPDATE!
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message='Please accept location request' />;
	}

	// "render()" MUST BE DEFINED! - render JSX
	render() {
		return <div className='border black'>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
