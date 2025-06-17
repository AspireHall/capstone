import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { vi } from "vitest";
import { MemoryRouter } from "react-router";
import BookingForm from "./Pages/BookingPage/BookingForm";
import { fetchAPI } from "./api/api";

describe("BookingForm", () => {
  test("renders the BookingForm heading", () => {
    const mockState = {
      date: "2025-06-13",
      time: "17:00",
      guests: "1",
      occassion: "Birthday",
    };
    const mockDispatch = vi.fn();
    render(
      <MemoryRouter>
        <BookingForm
          state={mockState}
          dispatch={mockDispatch}
          availableTimes={["17:00", "18:00"]}
        />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Book A Table");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("initializeTimes", () => {
  test("returns correct initial state", () => {
    const date = new Date();
    const availableTimes = fetchAPI(date);
    const formattedDate = date.toISOString().split("T")[0];

    const initializeTimes = {
      date: formattedDate,
      time: availableTimes[0] || "",
      guests: "1",
      occassion: "Birthday",
    };

    const result = initializeTimes;

    expect(result).toEqual({
      date: "2025-06-17",
      time: "17:00",
      guests: "1",
      occassion: "Birthday",
    });

    vi.useRealTimers();
  });
});
