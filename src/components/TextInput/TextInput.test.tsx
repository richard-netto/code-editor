import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('AppLogo', () => {
  it('should render component', () => {
    render(<TextInput />);
    const input = screen.getByTestId('text-input') as HTMLElement;
    expect(input).toBeInTheDocument();
  });

  it('should expand for parent width', () => {
    render(
      <div className="w-60">
        <TextInput />
      </div>
    );
    const input = screen.getByTestId('text-input') as HTMLElement;
    expect(input).toHaveClass('w-full');
  });
});
