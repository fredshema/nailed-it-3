import React, { useState } from "react";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import ImagesGrid from "./components/images/ImagesGrid";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async (albumId) => {
    setIsLoading(true);
    const response = await fetch(`/api/${albumId}/images`);
    const images = await response.json();
    setImages(images);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <Search getAlbumImages={(id) => fetchImages(id)} />
      <ImagesGrid isLoading={isLoading} images={images} />
    </div>
  );
};

export default App;
