import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./todo";

test("renders learn react link", () => {
  render(<Todo id={1} title={"test"} />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
