import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      name: "Coco",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Lola",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(React.createElement(App));
