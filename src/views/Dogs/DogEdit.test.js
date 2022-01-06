import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import DogEdit from './DogEdit';

test.skip('should render an edit form with prefilled data', async () => {
  const { container } = render(<DogEdit name="Lunchbox" />);

  await screen.findByText('Lunchbox');

  expect(container).toMatchSnapshot();
});
