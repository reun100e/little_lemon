import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  test("renders description and reservation link", () => {
    render(<Hero />);
    const description = screen.getByText(/we are a family-owned/i);
    const reservationLink = screen.getByRole("link", {
      name: /make a reservation/i,
    });

    expect(description).toBeInTheDocument();
    expect(reservationLink).toBeInTheDocument();
  });
});
