import React from "react";
import Card from "../Card";
import "./style.css";
class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: [
				{
					name: "CourseIT",
					avatar:
						"https://damiancatanzaro.com/static/imgs/portfolio/CourseIT/courseit.png",
					description: "Descripcion",
				},
				{
					name: "Endava",
					avatar:
						"https://es.investinbogota.org/sites/default/files/node/news/field_news_imagen/logo_endava_bogota.jpg",
					description: "Descripción",
				},
				{
					name: "Endava",
					avatar:
						"https://es.investinbogota.org/sites/default/files/node/news/field_news_imagen/logo_endava_bogota.jpg",
					description: "Descripción",
				},
				{
					name: "CourseIT",
					avatar:
						"https://damiancatanzaro.com/static/imgs/portfolio/CourseIT/courseit.png",
					description: "Descripcion",
				},
			],
		};
	}

	render() {
		const { startups } = this.state;
		const { filter } = this.props;
		return (
			<div className="card-wrapper-container">
				{startups.map((startup, key) => {
					return (
						<React.Fragment>
							{startup.name.toLowerCase().includes(filter.toLowerCase()) && (
								<Card
									key={key}
									name={startup.name}
									avatar={startup.avatar}
									description={startup.description}
								/>
							)}
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}
export default Cards;
