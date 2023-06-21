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

    const dateInput = getByLabelText("Date:");
    const numberOfDinnersInput = getByLabelText("Number of Dinners:");
    const occasionSelect = getByLabelText("Occasion:");

    fireEvent.change(dateInput, { target: { value: "2023-06-21" } });
    fireEvent.change(numberOfDinnersInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(dateInput.value).toBe("2023-06-21");
    expect(numberOfDinnersInput.value).toBe("4");
    expect(occasionSelect.value).toBe("Birthday");
  });


});
