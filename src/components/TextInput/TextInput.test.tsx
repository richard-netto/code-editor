import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render component', () => {
    render(<TextInput />);
    const input = screen.getByRole<HTMLInputElement>('searchbox');
    expect(input).toBeInTheDocument();
  });

  it('should expand for parent width', () => {
    render(
      <div className="w-60">
        <TextInput />
      </div>
    );
    const input = screen.getByRole<HTMLInputElement>('searchbox');
    expect(input).toHaveClass('w-full');
  });
});
