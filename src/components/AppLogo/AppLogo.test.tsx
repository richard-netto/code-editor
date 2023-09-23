import React from 'react';
import { render, screen } from '@testing-library/react';

// Assets
import AppLogo from './AppLogo';

describe('AppLogo', () => {
  it('should render component', () => {
    render(<AppLogo />);
    const svg = screen.getByRole<HTMLImageElement>('img');
    expect(svg).toBeInTheDocument();
  });

  it('should have alt property', () => {
    render(<AppLogo />);
    const svg = screen.getByRole<HTMLImageElement>('img');
    expect(svg).toHaveProperty('alt', 'Page logo');
  });
});
