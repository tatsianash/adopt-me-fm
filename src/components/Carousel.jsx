import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-around align-center h-[400px] mt-2 gap-4">
      <img
        src={images[active]}
        alt="animal"
        className="max-w-[400px] rounded-lg"
      />
      <div className="min-w-[100px]">
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
            className={
              index === active ? "active rounded-lg pb-1" : "rounded-lg pb-1"
            }
            alt="animal thumbnail"
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
