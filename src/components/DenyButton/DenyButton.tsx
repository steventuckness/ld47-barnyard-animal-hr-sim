import React from 'react';
import { Candidate } from '../../models/candidate';

import Button from '../Button/Button';
import styles from './DenyButton.module.css';

interface DenyButtonProps {
  onClickFunc: () => void;
}

const DenyButton: React.FC<DenyButtonProps> = (props: DenyButtonProps) => (
  <Button
    handleClick={() => props.onClickFunc()}
    label="Reject!"
    classes={[styles.DenyButton]}
  ></Button>
);

export default DenyButton;
