import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>

      <Pet name="Luna" animal="Dog" breed="Husky" />
      <Pet name="Coco" animal="Dog" breed="Havanese" />
      <Pet name="Lola" animal="Cat" breed="Tabby" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
