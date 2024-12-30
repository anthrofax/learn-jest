import { render, screen } from "@testing-library/react";
import userAction from "@testing-library/user-event";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting/>", () => {
  test("render hello world", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'Good To See U' if the button is not clicked", () => {
    render(<Greeting />);

    const textNotChanged = screen.getByText(`It's good to see you`, {
      exact: false,
    });

    expect(textNotChanged).toBeInTheDocument();
  });

  test("renders 'Text Changed' if the button is not clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const textChanged = screen.getByText(`Text changed`, {
      exact: false,
    });

    expect(textChanged).toBeInTheDocument();
  });

  test('"Good To See U" disappeared if button is clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const textBefore = screen.queryByText(`It's good to see you!`, {
      exact: false,
    });

    expect(textBefore).not.toBeInTheDocument();
  });
});
