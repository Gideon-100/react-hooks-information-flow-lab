import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  render(<Filter onCategoryChange={() => {}} />);
  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toBeInTheDocument();
});
