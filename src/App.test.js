import { render, screen } from '@testing-library/react';
import App from './App';

test('renders github react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub/navidasaman/i);
  expect(linkElement).toBeInTheDocument();
});
