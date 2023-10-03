import { expect, test } from "vitest";
// import { StaticRouter } from "react-router-dom/server";

import { render } from "@testing-library/react";
import Carousel from "../components/Carousel";

test("hero image changes after click", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);
  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const thumb = await carousel.findByTestId(`thumbnail${i}`);
    await thumb.click();

    expect(hero.src).toContain(image);
    expect(Array.from(thumb.classList)).toContain("active");
  }
});
