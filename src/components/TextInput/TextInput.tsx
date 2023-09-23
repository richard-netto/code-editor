import React, { FC, HTMLProps } from 'react';

// Types
type TextInputProps = HTMLProps<HTMLInputElement>;

const TextInput: FC<TextInputProps> = (props): React.JSX.Element => {
  return (
    <input
      {...props}
      role="searchbox"
      placeholder="Busque por algo"
      className="text-body w-full rounded-lg bg-white bg-opacity-[16%] px-[0.875rem] py-4 text-white placeholder:opacity-[64%] hover:bg-opacity-[0.24] focus:bg-opacity-[0.24] focus:outline-none"
    />
  );
};

export default TextInput;
