import React from "react";
import PropTypes from "prop-types";

const AlbumItem = ({ album }) => {
	return (
		<div className="albumCard">
			<img src={album.artworkUrl100} alt="" />
			<h3>{album.artistName}</h3>
			<p>{album.collectionName}</p>
		</div>
	);
};

AlbumItem.propTypes = {
	album: PropTypes.object.isRequired,
};

export default AlbumItem;
