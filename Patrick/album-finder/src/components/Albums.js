import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "./AlbumItem";

const Albums = ({ albums }) => {
	return (
		<div className="searchResults">
			{albums.map((album) => (
				<AlbumItem key={album.collectionId} album={album} />
			))}
		</div>
	);
};

Albums.propTypes = {
	albums: PropTypes.array.isRequired,
};

export default Albums;
