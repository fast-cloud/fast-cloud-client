import React from 'react';
import * as styles from './Button.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'home' | 'white' | 'cta' | 'login' | 'gray' | 'nav' | 'text';
}

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.buttonStyles({ variant })} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
