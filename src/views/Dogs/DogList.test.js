import { render } from '@testing-library/react';
import DogList from './DogList';

test('renders dog info', () => {
  const { container } = render(
    <DogList
      name="Barton"
      image="https://placedog.net/500?id=6"
      age={1}
      breed="Weimaraner"
      bio="dog is cute"
    />
  );
  expect(container).toMatchSnapshot();
});
