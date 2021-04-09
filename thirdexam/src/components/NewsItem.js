import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ news }) => {
	const buttonStyle = {
		backgroundColor: `${news.color}`,
		width: "20%",
		padding: "10px",
		color: "white",
		fontFamily: "'Satisfy', cursive",
		borderRadius: "1rem",
		outline: "none",
	};

	const clickHandler = (e) => {
		console.log(e);
		e.view.document.querySelector("h1").style.color = news.color;
	};

	return (
		<div className="card">
			<h2>{news.title}</h2>
			<p>{news.body}</p>
			<button style={buttonStyle} onClick={clickHandler}>
				Set {news.color}
			</button>
		</div>
	);
};

NewsItem.propType = {
	news: PropTypes.object.isRequired,
};

export default NewsItem;
