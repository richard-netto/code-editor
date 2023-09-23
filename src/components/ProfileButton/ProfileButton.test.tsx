import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import ProfileButton from './ProfileButton';

// Assets
import ProfileImage from '../../assets/images/terry_crews.jpg';

describe('ProfileButton', () => {
  it('should render default component', () => {
    render(<ProfileButton imageSrc={ProfileImage} name="Terry Crews" />);

    const button = screen.getByRole<HTMLButtonElement>('button');
    const image = screen.getByRole<HTMLImageElement>('img');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'text-body flex flex-row content-center items-center gap-2 rounded-lg p-3'
    );
    expect(button.textContent).toBe('Terry Crews');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'User profile');
    expect(image).toHaveAttribute('src', 'terry_crews.jpg');
    expect(image).toHaveClass('rounded-full object-cover h-8 w-8');
  });

  it('should have on hover class for background color', () => {
    render(<ProfileButton imageSrc={ProfileImage} name="Terry Crews" />);

    const button = screen.getByRole<HTMLButtonElement>('button');

    expect(button).toHaveClass('hover:bg-white hover:bg-opacity-[8%]');
  });

  it('should render as medium size', () => {
    render(<ProfileButton imageSrc={ProfileImage} name="Terry Crews" />);

    const button = screen.getByRole<HTMLButtonElement>('button');
    const image = screen.getByRole<HTMLImageElement>('img');

    expect(button).toHaveClass('p-3');
    expect(image).toHaveClass('h-8 w-8');
  });

  it('should render as small size', () => {
    render(
      <ProfileButton
        imageSrc={ProfileImage}
        name="Terry Crews"
        buttonSize="small"
      />
    );

    const button = screen.getByRole<HTMLButtonElement>('button');
    const image = screen.getByRole<HTMLImageElement>('img');

    expect(button).toHaveClass('p-2');
    expect(image).toHaveClass('h-6 w-6');
  });

  it('should render as tweet', () => {
    render(
      <ProfileButton
        imageSrc={ProfileImage}
        name="Terry Crews"
        buttonSize="small"
        isTweet
      />
    );

    const button = screen.getByRole<HTMLButtonElement>('button');

    expect(button.textContent).toBe('@Terry Crews');
  });
});
