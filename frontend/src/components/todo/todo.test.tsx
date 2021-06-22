import React from "react";
import { render, screen } from "@testing-library/react";
import TodoComp from ".";

test("renders learn react link", () => {
  render(<TodoComp todo={{ id: "ad1", title: "test" }} />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
