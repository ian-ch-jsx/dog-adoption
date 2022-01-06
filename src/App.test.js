import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pet Emporium/i);
  expect(linkElement).toBeInTheDocument();
});
