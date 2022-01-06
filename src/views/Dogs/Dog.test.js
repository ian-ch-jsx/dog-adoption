import { render } from '@testing-library/react';
import Dog from './Dog';

test.skip('renders dog info', () => {
  const { container } = render(
    <Dog
      name="Barton"
      image="https://placedog.net/500?id=6"
      age={1}
      breed="Weimaraner"
      bio="dog is cute"
    />
  );
  expect(container).toMatchSnapshot();
});
