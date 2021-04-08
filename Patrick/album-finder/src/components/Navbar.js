import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ searchArtist }) => {
	// Custom state to save state to localStorage.
	function usePersistedState(key, defaultValue) {
		const [state, setState] = useState(
			localStorage.getItem(key) || defaultValue
		);
		useEffect(() => {
			localStorage.setItem(key, state);
		}, [key, state]);
		return [state, setState];
	}

	const [text, setText] = usePersistedState(1, "");
	const [style, setStyle] = useState({});
	const [iconStyle, setIconStyle] = useState({});

	const onChange = (e) => {
		console.log(e.target);
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		if (e.key === "Enter") searchArtist(text);
	};

	const onFocus = (e) => {
		setStyle({ width: "60%" });
		setIconStyle({ right: "21%" });
	};

	const onBlur = (e) => {
		setStyle({ width: "40%" });
		setIconStyle({ right: "31%" });
	};

	return (
		<div className="nav">
			<span className="fa fa-search" style={iconStyle}></span>
			<input
				className="searchBar"
				type="text"
				name="text"
				placeholder="Search..."
				autoComplete="off"
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
