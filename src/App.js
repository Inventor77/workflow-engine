import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SliderWindow from "./components/SliderWindow";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Dashboard />
				</div>
				<SliderWindow />
			</Fragment>
		);
	}
}

export default App;
