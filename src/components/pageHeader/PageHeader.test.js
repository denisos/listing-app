import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

test('should render PageHeader with title', () => {
  const mockTitle = "A Test Title";
  render(<PageHeader title={mockTitle} />);

  expect(screen.getByRole('heading')).toHaveTextContent(mockTitle)
});
