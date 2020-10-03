import React from 'react';

import Button from '../Button/Button';
import styles from './ApproveButton.module.css';

function handleClick() {
  console.log('Approve!');
}

const ApproveButton: React.FC = () => (
  <Button
    handleClick={handleClick}
    label="Approve!"
    classes={[styles.ApproveButton]}
  ></Button>
);

export default ApproveButton;
