const { screen, render } = require("@testing-library/react")
const { default: Contact } = require("../components/pages/Contact")
import "@testing-library/jest-dom"

test("renders contact page", () => {
    render(<Contact/>)
    const heading=screen.getByText('Welcome to Contact Page');
    expect(heading).toBeInTheDocument();
})
