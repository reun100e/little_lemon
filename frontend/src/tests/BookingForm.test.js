import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  test("should update form values correctly", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    const dateInput = getByLabelText("Date");
    const numberOfDinnersInput = getByLabelText("Number of Dinners");
    const occasionSelect = getByLabelText("Occasion");

    fireEvent.change(dateInput, { target: { value: "2023-06-21" } });
    fireEvent.change(numberOfDinnersInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(dateInput.value).toBe("2023-06-21");
    expect(numberOfDinnersInput.value).toBe("4");
    expect(occasionSelect.value).toBe("Birthday");
  });

  it("validates HTML5 validation and attributes", () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    // Get form elements
    const dateInput = getByLabelText("Date");
    const timeInput = getByLabelText("Time");
    const numberOfDinnersInput = getByLabelText("Number of Dinners");
    const occasionInput = getByLabelText("Occasion");
    const submitButton = getByText("Book now");

    // Check HTML5 validation attributes
    expect(dateInput.required).toBe(true);
    expect(timeInput.required).toBe(true);
    expect(numberOfDinnersInput.required).toBe(true);
    expect(occasionInput.required).toBe(true);

    // Test validation messages
    fireEvent.submit(submitButton);
    expect(getByText("Please select a date")).toBeInTheDocument();
    expect(getByText("Please select a time")).toBeInTheDocument();
    expect(getByText("Please enter the number of dinners")).toBeInTheDocument();
    expect(getByText("Please select an occasion")).toBeInTheDocument();
  });


});
