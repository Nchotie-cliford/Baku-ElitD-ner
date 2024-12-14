import { createRoot } from "react-dom/client";
import Order from "./Order";

// delete the Pizza component

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza - Order Now</h1>
      <Order name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
      <Order
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Order
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
