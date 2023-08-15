import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList Component", () => {
  it("should render a list of cards", () => {
    const mockCards = [
      { name: "John", city: "New York" },
      { name: "Jane", city: "London" },
    ];

    render(<CardList cards={mockCards} />);

    const cardElements = screen.getAllByTestId("card-container");
    expect(cardElements).toHaveLength(2);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
  });

  it("should not render any card with empty cards array", () => {
    render(<CardList cards={[]} />);

    const cardElements = screen.queryByTestId("card-component");
    expect(cardElements).toBeNull();
  });
});