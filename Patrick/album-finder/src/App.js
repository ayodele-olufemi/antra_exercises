import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import axios from "axios";
import Albums from "./components/Albums";

const App = () => {
	const [albums, setAlbums] = useState([]);
	const [topText, setTopText] = useState("Search Albums by ArtistName:");

	const searchArtist = async (text) => {
		const res = await axios.get(
			`https://itunes.apple.com/search?term=${text}&media=music&entity=album&attribute=artistTerm&limit=500`
		);
		// setAlbums(res.results);
		setTopText(`${res.data.results.length} results for ${text}`);
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
