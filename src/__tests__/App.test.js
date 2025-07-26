import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the Header and ShoppingList components", () => {
  render(<App />);
  expect(screen.getByText("Shopster")).toBeInTheDocument();
});

