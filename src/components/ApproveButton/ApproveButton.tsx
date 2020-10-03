import React from 'react';

import Button from '../Button/Button';
import styles from './ApproveButton.module.css';

function handleClick(resumeId: number) {
  console.log(`Approved resume ${resumeId}!`);
}

interface ApproveButtonProps {
  resumeId: number;
}

const ApproveButton: React.FC<ApproveButtonProps> = (
  props: ApproveButtonProps
) => (
  <Button
    handleClick={() => handleClick(props.resumeId)}
    label="Approve!"
    classes={[styles.ApproveButton]}
  ></Button>
);

export default ApproveButton;
