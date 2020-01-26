// create your App component here
import React, { PureComponent } from 'react'

export default class App extends PureComponent {

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
	}

	render() {

	}

}