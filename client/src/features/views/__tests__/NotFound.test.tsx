import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { NotFound } from '../NotFound';

describe('NotFound', () => {
  test('should render', () => {
    const wrapper = render(<NotFound />);

    expect(wrapper.getByRole('img')).toBeDefined();
    expect(wrapper.getByText("Désolé, la page que vous cherchez n'existe pas.")).toBeDefined();
    expect(wrapper.getByText("Revenir à l'accueil")).toBeDefined();
    expect(wrapper.getByRole('button')).toHaveProperty('href', '/');
  });
});
