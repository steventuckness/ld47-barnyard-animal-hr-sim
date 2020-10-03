import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApproveButton from './ApproveButton';

describe('<ApproveButton />', () => {
  test('it should mount', () => {
    render(<ApproveButton />);
    
    const approveButton = screen.getByTestId('ApproveButton');

    expect(approveButton).toBeInTheDocument();
  });
});