import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ news }) => {
	const buttonStyle = {
		backgroundColor: `${news.color}`,
		fontWeight: "bold",
		padding: "20px 40px",
		color: "white",
		fontFamily: "'Satisfy', cursive",
		borderRadius: "0.3rem",
		outline: "none",
		border: "none",
	};

	let OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";

	const clickHandler = (e) => {
		e.view.document.querySelector("h1").style.color = news.color;
		e.target.parentNode.style.border = `${news.color} 2px solid`;
		e.target.parentNode.style.boxShadow = `3px 3px 0 1px ${news.color}`;
	};

	const blurHandler = (e) => {
		e.target.parentNode.style.border = "white 2px solid";
		e.target.parentNode.style.boxShadow = "3px 3px 0 1px white";
	};

	const blurHandler2 = (e) => {
		if (OSName === "MacOS") {
			e.target.parentNode.style.border = "none";
			e.target.parentNode.style.boxShadow = "none";
		}
	};

	return (
		<div className="card" id={news.id}>
			<h2>{news.title}</h2>
			<p>{news.body}</p>
			<button
				id="btn"
				className={news.id}
				style={buttonStyle}
				onClick={clickHandler}
				onBlur={blurHandler}
				onMouseOut={blurHandler2}
			>
				Set {news.color}
			</button>
		</div>
	);
};

NewsItem.propType = {
	news: PropTypes.object.isRequired,
};

export default NewsItem;
