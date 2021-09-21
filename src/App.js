import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Dashboard />
				</div>
			</Fragment>
		);
	}
}

export default App;
