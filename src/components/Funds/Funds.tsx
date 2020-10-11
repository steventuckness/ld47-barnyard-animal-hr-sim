import React from 'react';
import styles from './Funds.module.scss';

export interface FundsProps {
  money: number;
}

const Funds: React.FC<FundsProps> = (props: FundsProps) => (
  <div className={styles.Funds} data-testid="Funds">
    Funds: ${props.money}
  </div>
);

export default Funds;
