import React from "react";
import Footer from "../components/Footer";
import "./style.css";
import Navbar from "../components/Navbar";

class AgregarStartup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			logo: "",
			email: "",
			description: "",
			web: "",
			twitter: "",
			instagram: "",
			display: "none",
			error: "",
			exito: "",
		};
	}

	handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		this.setState({
			[name]: value, //!actualizacion dinamica del estado, se usa [], xq si no uso [] busca la clave name, con [] usa la variale namae= name/ name=logo, etc// para esto cada input debe tener 'name'
		});
	};
	handleSubmit = (e) => {
		const { name, logo, description, email } = e.target;
		console.log(name, logo, description, email);
		if (
			name.value === "" ||
			logo.value === "" ||
			description.value === "" ||
			email.value === ""
		) {
			this.setState({
				display: "inline",
				error: "error",
			});
		} else {
			this.setState({
				display: "inline",
				exito: "exito",
				error: "",
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className={this.state.error}>
					<p className="text">Por favor completa todos los datos requeridos</p>
				</div>
				<div className={this.state.exito}>
					<p className="text">
						Startup creada correctamente. En breve sera aprobada.
					</p>
				</div>

				<div className="wrapper">
					<form onSubmit={this.handleSubmit} className="form-container">
						<label className="label">
							Nombre
							<input
								className="input-a"
								type="text"
								name="name"
								placeholder="Nombre"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>

						<label className="label">
							Logo
							<input
								className="input-a"
								type="text"
								name="logo"
								placeholder="Link a imagen"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>
						<label className="label">
							Mail
							<input
								className="input-a"
								type="email"
								name="email"
								placeholder="Email"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>
						<label className="label">
							Descripción
							<textarea
								cols="25"
								rows="10"
								name="description"
								onChange={(e) => this.handleChange(e)}
							></textarea>
						</label>
						<label className="label">
							Web
							<input
								className="input-a"
								type="text"
								placeholder="Web (opcional)"
								name="web"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>
						<label className="label">
							Twitter
							<input
								className="input-a"
								type="text"
								placeholder="Twitter (opcional)"
								name="twitter"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>
						<label className="label">
							Instagram
							<input
								className="input-a"
								type="text"
								placeholder="Instagram (opcional)"
								name="instagram"
								onChange={(e) => this.handleChange(e)}
							></input>
						</label>
						<button className="submit-button" type="submit">
							Enviar
						</button>
					</form>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default AgregarStartup;
