import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Employee from './Employee';

describe('<Employee />', () => {
  test('it should mount', () => {
    render(<Employee />);
    
    const employee = screen.getByTestId('Employee');

    expect(employee).toBeInTheDocument();
  });
});