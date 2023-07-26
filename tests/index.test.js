import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import PageTitle from "../src/components/PageTitle";

// Mocking the useDispatch hook to avoid actual Redux store calls
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));
// Mocking the useDispatch hook to avoid actual Redux store calls
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useStateq: jest.fn(),
}));

// Mocking axios.get to return a fake response
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { data: [] } })),
}));

describe("Home component", () => {
  test("renders the correct page title", () => {
    const { queryByText } = render(<PageTitle title="Listed Jobs" />);

    expect(queryByText(/Listed Jobs/i)).toBeTruthy();
  });
});
