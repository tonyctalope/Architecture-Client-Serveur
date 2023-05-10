import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { Home } from '../Home';

describe('Home', () => {
  test('should render', () => {
    const wrapper = render(<Home />);

    expect(
      wrapper.getByRole('heading', {
        name: /bienvenue sur ubeer/i
      })
    ).toBeDefined();
    expect(
      wrapper.getByText(/ubeer est une plateforme de livraison de bières à domicile\./i)
    ).toBeDefined();
    expect(
      wrapper.getByRole('img', {
        name: /mascotte de la page d'accueil/i
      })
    ).toBeDefined();
  });
});
