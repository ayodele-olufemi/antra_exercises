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
		console.log(e.target.className);
		e.target.parentNode.style.border = `${news.color} 2px solid`;
		e.target.parentNode.style.boxShadow = `3px 3px 0 1px ${news.color}`;
	};

	const blurHandler = (e) => {
		e.target.parentNode.style.border = "none";
		e.target.parentNode.style.boxShadow = "none";
	};

	return (
		<div className="card" id={news.id}>
			<h2>{news.title}</h2>
			<p>{news.body}</p>
			<button
				className={news.id}
				style={buttonStyle}
				onClick={clickHandler}
				onBlur={blurHandler}
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
