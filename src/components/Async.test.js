import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async/>", () => {
  test("renders list if request succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", text: "lorem ipsum" }],
    });

    render(<Async />);

    const listItem = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 2000 }
    ); // Ada fitur intellisense nya
    expect(listItem).not.toHaveLength(0);
  });
});
