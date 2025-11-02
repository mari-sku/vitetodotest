
import TodoTable from './TodoTable';
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import type { Todo } from './types';

test('renders todotable', () => {
  const row: Todo[] = [
    {description: 'Go to coffee', date: '24.01.2025', priority: 'low'}
  ];

  render(<TodoTable todos={row} />);
  
  const table = screen.getByRole('table');
  expect(table).toHaveTextContent(/go to coffee/i);
});