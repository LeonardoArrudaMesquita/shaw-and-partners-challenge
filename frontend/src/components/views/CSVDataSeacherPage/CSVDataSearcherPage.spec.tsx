import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import CSVDataSearcherPage from "./CSVDataSearcherPage";
import { mocked } from "jest-mock";

jest.mock("axios"); // Mocking axios module

describe("CSVDataSeacherPage", () => {
  const setup = () => {
    const mockResponse = { data: [{ name: "John", city: "New York" }, { name: "Steve", city: "London" }] };
    mocked(axios.get).mockResolvedValue(mockResponse);
    mocked(axios.post).mockResolvedValue(mockResponse);
    return render(<CSVDataSearcherPage />);
  };

  it("should render component and handle input file", async () => {
    setup();

    const fileInput = screen.getByLabelText("Choose a CSV file");
    fireEvent.change(fileInput, {
      target: { files: [new File([""], "data.csv")] },
    });

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3000/api/files",
        expect.any(FormData)
      );
    });
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("New York")).toBeInTheDocument();
    });
  });

  it("should handle filter input", async () => {
    setup();

    const filterInput = screen.getByTestId("filter-input");
    fireEvent.change(filterInput, { target: { value: "London" } });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:3000/api/users?q=London"
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Steve")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("London")).toBeInTheDocument();
    });
  });
});
