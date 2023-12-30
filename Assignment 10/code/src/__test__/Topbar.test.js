const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Topbar } = require("../components/UI/Topbar");
import { mockData } from "../../__mocks__/mockdata";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import App from "../app";
import Layout from "../components/UI/Layout";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
    ok: true,
  });
});
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};
test("Testing the search functionality", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  const restrocontainer = screen.getByTestId("restrocontainer");
  expect(restrocontainer.children.length).toBe(9);
  const inputfield = screen.getByPlaceholderText("Search for restaurants");
  fireEvent.change(inputfield, { target: { value: "Meghana Foods" } });
  console.log(inputfield.value);
  expect(restrocontainer.children.length).toBe(1);
});
test("Testing the Login/Logout toggling", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  });
  const logoutbutton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(logoutbutton);
  const loginbutton = screen.getByRole("button", { name: "Login" });
  expect(loginbutton).toBeInTheDocument();
  fireEvent.click(loginbutton);
  expect(logoutbutton).toBeInTheDocument();
});
