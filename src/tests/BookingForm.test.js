import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  test("renders form inputs", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const numberOfDinnersInput = screen.getByLabelText(/number of dinners/i);
    const occasionInput = screen.getByLabelText(/occasion/i);

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberOfDinnersInput).toBeInTheDocument();
    expect(occasionInput).toBeInTheDocument();
  });
});
