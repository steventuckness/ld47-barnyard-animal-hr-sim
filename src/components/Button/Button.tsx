import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  handleClick: () => void;
  classes?: string[];
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const classes = [styles.Button].concat(props.classes ?? []).join(' ');
  return (
    <button className={classes} onClick={props.handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
