import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dog from './Dog';

test('renders dog info', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dog match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Lunchbox');
  expect(container).toMatchSnapshot();
});
