import React from "react";
import "./style.css";

class Card extends React.Component {
	render() {
		const { name, description, avatar } = this.props;
		return (
			<div className="card-container">
				<div className="card-avatar-container">
					<img className="card-avatar" src={avatar} />
				</div>
				<div className="card-info-container">
					<h3>{name}</h3>
					<h4>{description}</h4>
				</div>
			</div>
		);
	}
}

export default Card;
