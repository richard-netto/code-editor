import React, { FC, HTMLProps } from 'react';

type TextInputProps = HTMLProps<HTMLInputElement>;

const TextInput: FC<TextInputProps> = (props): JSX.Element => {
  return (
    <input
      {...props}
      data-testid="text-input"
      placeholder="Busque por algo"
      className="text-body w-full rounded-lg bg-white bg-opacity-[16%] px-[0.875rem] py-4 text-white placeholder:opacity-[64%] hover:bg-opacity-[0.24] focus:bg-opacity-[0.24] focus:outline-none"
    />
  );
};

export default TextInput;
