import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Albums from "./components/Albums";

const App = () => {
	useEffect(() => {
		searchArtist(localStorage.getItem(1));
		// eslint-disable-next-line
	}, []);

	const [albums, setAlbums] = useState([]);

	const [topText, setTopText] = useState("Search Albums by ArtistName:");

	const searchArtist = async (text) => {
		const res = await axios.get(
			`https://itunes.apple.com/search?term=${text}&media=music&entity=album&attribute=artistTerm&limit=500`
		);

		text !== ""
			? setTopText(`${res.data.results.length} results for ${text}`)
			: setTopText("Search Albums by ArtistName:");
		setAlbums(res.data.results);
	};

	return (
		<div className="App">
			<Navbar searchArtist={searchArtist} />
			<div className="header">
				<h3 className="mainText">{topText}</h3>
				<hr />
			</div>
			<Albums albums={albums} />
		</div>
	);
};

export default App;
