import React, { useState } from "react";

const Search = ({ getAlbumImages }) => {
  const [albumId, setAlbumId] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getAlbumImages(albumId);
        }}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Enter album ID..."
          autoFocus
          value={albumId}
          required
          onChange={(e) => setAlbumId(e.target.value)}
        />
        <button className="btn" type="submit">
          Get Photos
        </button>
      </form>
    </div>
  );
};

export default Search;
