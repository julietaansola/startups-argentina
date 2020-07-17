import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./style.css";
import { Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
		};
	}

	handleData(inputValue) {
		this.setState({
			inputValue: inputValue,
		});
	}

	render() {
		const { inputValue } = this.state;
		return (
			<div className="wrapper">
				<Navbar getData={(inputValue) => this.handleData(inputValue)} />
				<Cards filter={inputValue} className="cards" />
				<Link to="/prueba">Ir a prueba</Link>
				<Footer className="footer" />
			</div>
		);
	}
}

export default App;
