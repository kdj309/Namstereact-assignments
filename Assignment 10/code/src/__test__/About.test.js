import { render, screen } from "@testing-library/react";
import About from "../components/pages/About";
import "@testing-library/jest-dom";
//!group of tests can be done by describe
describe("Test suit for About page", () => {
  test("Checking if the About page has the correct heading", () => {
    render(<About />);
    const header = screen.getByText("Welcome to About Page");
    expect(header).toBeInTheDocument();
  });
  //!it can be used as shortcut for test
  it("Checking if the About page has input with placeholder",()=>{
   render(<About/>)
   expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument()
  })
  it("Checking if the About page has input with datatestid",()=>{
   //!getByTestId is method from which we can get particular element by it's unique id
   render(<About/>)
   expect(screen.getByTestId("aboutcomponentinput")).toBeInTheDocument()
  })
});
