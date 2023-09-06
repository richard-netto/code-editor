import React from 'react';
import { render, screen } from '@testing-library/react';
import AppLogo from './AppLogo';

describe('AppLogo', () => {
  it('should render component', () => {
    render(<AppLogo />);
    const svg = screen.getByRole('img') as HTMLElement;
    expect(svg).toBeInTheDocument();
  });

  it('should have alt property', () => {
    render(<AppLogo />);
    const svg = screen.getByRole('img') as HTMLElement;
    expect(svg).toHaveProperty('alt', 'Page logo');
  });
});
