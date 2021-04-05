import React, { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ searchArtist }) => {
	const [text, setText] = useState("");
	const [style, setStyle] = useState({});

	const onChange = (e) => {
		console.log(e.target);
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		if (e.key === "Enter") searchArtist(text);
	};

	const onFocus = (e) => {
		setStyle({ width: "60%" });
	};

	const onBlur = (e) => {
		setStyle({ width: "40%" });
	};

	// let searchBar = window.querySelector(".searchBar");
	// let searchIcon = window.querySelector(".fa-search");

	// searchBar.addEventListener("focus", function () {
	// 	searchBar.style.width = "60%";
	// 	searchIcon.style.right = "21%";
	// });

	// searchBar.addEventListener("blur", function () {
	// 	searchBar.style.width = "40%";
	// 	searchIcon.style.right = "31%";
	// });

	return (
		<div className="nav">
			<span className="fa fa-search"></span>
			<input
				className="searchBar"
				type="text"
				name="text"
				placeholder="Search..."
				value={text}
				style={style}
				onChange={onChange}
				onKeyPress={onSubmit}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
	);
};

Navbar.propTypes = {
	searchArtist: PropTypes.func.isRequired,
};

export default Navbar;
