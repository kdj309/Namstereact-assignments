import { render, screen } from "@testing-library/react";
import Restrodetail from "../components/Restaurants/Restrodetail";
import { LeonBurgersWings } from "../../__mocks__/mockdata";
import { act } from "react-dom/test-utils";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(LeonBurgersWings);
    },
    ok: true,
  });
});
describe("Test suite for Restaurant Component", () => {
  test("Checking the Leon's - Burgers & Wings (Leon Grill) has 11 Dish Categories", async () => {
    let containerval;
    await act(() => {
      const { container } = render(
        <BrowserRouter>
          <Restrodetail />
        </BrowserRouter>
      );
      containerval = container;
    });
    const element = screen.getByRole("main");
    // expect(screen.getByTestId("Leon's - Burgers & Wings (Leon Grill)")).toBeInTheDocument();
    expect(element.children.length).toBe(13);
  });
});
