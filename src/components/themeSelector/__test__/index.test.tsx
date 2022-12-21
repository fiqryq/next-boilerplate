import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ThemeSelector from '../index';

const describeErrorComponent = '<ThemeSelector /> test case';

describe(describeErrorComponent, () => {
  const { container } = render(<ThemeSelector />);
  test(`Render ${describeErrorComponent} correctly`, () => {
    expect(container).toMatchSnapshot();
  });
});
