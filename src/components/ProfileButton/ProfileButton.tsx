import React, { FC, HTMLProps } from 'react';

interface ProfileButtonProps extends HTMLProps<HTMLButtonElement> {
  name: string;
  imageSrc: string;
  buttonSize?: 'medium' | 'small';
  isTweet?: boolean;
}

const ProfileButton: FC<ProfileButtonProps> = ({
  name,
  imageSrc,
  buttonSize = 'medium',
  isTweet = false,
  ...props
}): React.JSX.Element => {
  return (
    <button
      {...props}
      type="button"
      className={`text-body flex flex-row content-center items-center gap-2 rounded-lg hover:bg-white hover:bg-opacity-[8%] ${
        buttonSize === 'medium' ? 'p-3' : 'p-2'
      }`}
    >
      <img
        src={imageSrc}
        alt="User profile"
        className={`rounded-full object-cover ${
          buttonSize === 'medium' ? 'h-8 w-8' : 'h-6 w-6'
        }`}
      />
      {isTweet ? '@' : ''}
      {name}
    </button>
  );
};

export default ProfileButton;
