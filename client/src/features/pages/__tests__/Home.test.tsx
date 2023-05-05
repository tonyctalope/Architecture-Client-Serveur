import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { Home } from '../Home';

describe('Home', () => {
  test('should render', () => {
    const wrapper = render(<Home />);

    expect(wrapper.getByText('Bienvenue sur Ubeer')).toBeDefined();
    expect(
      wrapper.getByText('Ubeer est une plateforme de livraison de bières à domicile.')
    ).toBeDefined();
    expect(wrapper.getByRole('img')).toBeDefined();
  });
});
