import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DogForm from '../../components/Dog/DogForm';

test('should render an edit form', async () => {
  const { container } = render(<DogForm />);

  await screen.findByText('name:');

  expect(container).toMatchSnapshot();
});
