import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

test("renders item name and category", () => {
  render(<Item name="Apple" category="Produce" />);
  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Produce")).toBeInTheDocument();
});

test("the <li> does not have a className when initialized", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  const listItem = container.querySelector("li");
  expect(listItem).toBeInTheDocument();
  expect(listItem.className).toBe("");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  const button = screen.getByText(/Add to Cart/i);
  fireEvent.click(button);
  const listItem = container.querySelector("li");
  expect(listItem.className).toContain("in-cart");
});
