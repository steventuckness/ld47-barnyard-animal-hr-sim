import React from 'react';

import Button from '../Button/Button';
import styles from './ApproveButton.module.scss';

interface ApproveButtonProps {
  onClickFunc: any;
}

const ApproveButton: React.FC<ApproveButtonProps> = (
  props: ApproveButtonProps
) => (
  <Button
    handleClick={() => props.onClickFunc()}
    label="Hire!"
    classes={[styles.ApproveButton]}
  ></Button>
);

export default ApproveButton;
