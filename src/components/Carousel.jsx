import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" data-testid="hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            onClick={() => setActive(index)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setActive(index);
              }
            }}
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            data-index={index}
            data-testid={`thumbnail${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
