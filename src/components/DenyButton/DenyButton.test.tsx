import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DenyButton from './DenyButton';

describe('<DenyButton />', () => {
  test('it should mount', () => {
    render(<DenyButton />);
    
    const denyButton = screen.getByTestId('DenyButton');

    expect(denyButton).toBeInTheDocument();
  });
});