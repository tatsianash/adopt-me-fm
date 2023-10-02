import { useState } from "react";

// above Carousel
interface ICarouselProps {
  images: string[];
}
const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}: ICarouselProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            onClick={() => setActive(+index)}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
