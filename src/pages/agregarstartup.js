import React from "react";
import Footer from "../components/Footer";
import "./style.css";

class AgregarStartup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			logo: "",
			description: "",
			web: "",
			twitter: "",
			instagram: "",
		};
	}

	handleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value, //!actualizacion dinamica del estado, se usa [], xq si no uso [] busca la clave name, con [] usa la variale namae= name/ name=logo, etc// para esto cada input debe tener 'name'
		});
	}

	render() {
		return (
			<div className="wrapper">
				<form className="form-container">
					<label className="label" for="">
						Nombre
						<input
							className="input-a"
							type="text"
							name="name"
							placeholder="Nombre"
							onChange={(e) => this.handleChange(e)}
							required
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
							required
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
							required
						></input>
					</label>
					<label className="label">
						Descripción
						<textarea
							cols="25"
							rows="10"
							name="description"
							onChange={(e) => this.handleChange(e)}
							required
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
				<Footer />
			</div>
		);
	}
}

export default AgregarStartup;
