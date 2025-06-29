import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting', () => {
  render(<App />);
  const heading = screen.getByText(/hello from react/i);
  expect(heading).toBeInTheDocument();
});
