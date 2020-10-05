import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Funds from './Funds';

describe('<Funds />', () => {
  test('it should mount', () => {
    render(<Funds />);
    
    const funds = screen.getByTestId('Funds');

    expect(funds).toBeInTheDocument();
  });
});