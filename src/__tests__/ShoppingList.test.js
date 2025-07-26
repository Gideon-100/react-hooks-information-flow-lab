import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const mockItems = [
  { id: 1, name: "Cheese", category: "Dairy" },
  { id: 2, name: "Banana", category: "Produce" },
];

test("renders the item list", () => {
  render(<ShoppingList items={mockItems} />);
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.getByText("Banana")).toBeInTheDocument();
});


