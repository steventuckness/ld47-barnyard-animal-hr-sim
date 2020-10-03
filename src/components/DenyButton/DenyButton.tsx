import React from 'react';

import Button from '../Button/Button';
import styles from './DenyButton.module.css';

function handleClick() {
  console.log('Denied!');
}

const DenyButton: React.FC = () => (
  <Button
    handleClick={handleClick}
    label="Deny!"
    classes={[styles.DenyButton]}
  ></Button>
);

export default DenyButton;
