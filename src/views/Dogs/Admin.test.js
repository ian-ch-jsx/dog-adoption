import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('should render an edit form', async () => {
  const { container } = render(<Admin />);

  await screen.findByText('name:');

  expect(container).toMatchSnapshot();
});
