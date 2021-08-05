import React from 'react';

// Styles
import { Button } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
