import React from 'react';

import Button from '../Button/Button';
import styles from './DenyButton.module.css';

function handleClick(resumeId: number) {
  console.log(`Denied resume ${resumeId}!`);
}

interface DenyButtonProps {
  resumeId: number;
}

const DenyButton: React.FC<DenyButtonProps> = (props: DenyButtonProps) => (
  <Button
    handleClick={() => handleClick(props.resumeId)}
    label="Deny!"
    classes={[styles.DenyButton]}
  ></Button>
);

export default DenyButton;
