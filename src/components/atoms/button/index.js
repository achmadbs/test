import React from 'react';
import { Btn } from './style';

const Button = ({ children, onClick, ...restProps }) => {
  return (
    <Btn {...restProps} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
