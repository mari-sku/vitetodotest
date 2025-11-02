import TodoList from "./TodoList";
import { test, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => cleanup());

test("clear todos", async () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "Go to coffee" },
  });
  fireEvent.change(screen.getByPlaceholderText("Date"), {
    target: { value: "2025-11-20" },
  });
  fireEvent.click(screen.getByText("Add"));
  const table = await screen.findByRole("table");
  expect(table).toHaveTextContent(/go to coffee/i);
  fireEvent.click(screen.getByText("Clear"));

  expect(screen.queryByText(/go to coffee/i)).not.toBeInTheDocument();
});
