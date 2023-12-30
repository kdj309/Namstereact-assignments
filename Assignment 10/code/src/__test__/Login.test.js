const { render, screen } = require("@testing-library/react");
const { default: Login } = require("../components/pages/Login");
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
test("renders login page",async () => {
   await act(()=> render(<Login/>))
    // expect(screen.getByText('Submit')).toBeInTheDocument();
});
