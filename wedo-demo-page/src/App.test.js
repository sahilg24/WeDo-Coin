import { render, screen } from '@testing-library/react';
import WedoPageDemo from './WedoPageDemo';

test('renders learn react link', () => {
  render(<WedoPageDemo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
