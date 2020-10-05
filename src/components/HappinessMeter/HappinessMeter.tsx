import React from 'react';
import styles from './HappinessMeter.module.css';

interface HappinessMeterProps {
  happiness: any; // TODO: Fix type.
}

const HappinessMeter: React.FC<HappinessMeterProps> = (props: HappinessMeterProps) => (
  <div className={styles.HappinessMeter} data-testid="HappinessMeter">
    Company Happiness: {`${(props.happiness * 100).toFixed(2)}%`}
  </div>
);

export default HappinessMeter;
