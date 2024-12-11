import { createRoot } from "react-dom/client";
import Doener from "./Doener";

const App = () => {
  return (
    <div>
      <h1>Doener</h1>
      <Doener
        name="Doener1"
        description="Doener Kebab"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Doener
        name="Doener2"
        description="Doener kässe"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Doener
        name="Doener3"
        description="Doener Fleisch"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
