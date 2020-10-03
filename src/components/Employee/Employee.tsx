import React from 'react';
import styles from './Employee.module.css';

const Employee: React.FC = () => (
  <div className={styles.Employee} data-testid="Employee">
    Employee Component
  </div>
);

export default Employee;
