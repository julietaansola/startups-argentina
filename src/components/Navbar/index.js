import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	handleChange(e) {
		const inputValue = e.target.value;
		const { getData } = this.props;
		getData(inputValue);
	}
	render() {
		return (
			<div className="navbar">
				<div className="navbar-input">
					<h1>Startup Argentina</h1>
					<input
						className="input"
						onChange={(e) => this.handleChange(e)}
						type="text"
						placeholder="Agregar Startup"
					></input>
				</div>
				<Link to="/agregarstartup">
					<button className="button">Agregar Startup</button>
				</Link>
			</div>
		);
	}
}

export default Navbar;
