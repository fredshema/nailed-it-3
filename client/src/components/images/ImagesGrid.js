import React from "react";

const ImagesGrid = ({ images, isLoading }) => {
  return isLoading ? (
    <div className="spinner">
      <div className="spring-spinner">
        <div className="spring-spinner-part top">
          <div className="spring-spinner-rotator"></div>
        </div>
        <div className="spring-spinner-part bottom">
          <div className="spring-spinner-rotator"></div>
        </div>
      </div>
      <p>Loading images...</p>
    </div>
  ) : (
    <main className="images">
      {images.map((image) => (
        <div className="image" key={image.id}>
          <div className="img">
            {/* used thumbails to limit data usage */}
            <img src={image.thumbnailUrl} alt={image.title} />
          </div>
          <div className="details">
            <h1>{image.title}</h1>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ImagesGrid;
