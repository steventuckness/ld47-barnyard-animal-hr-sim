import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Candidate from './Candidate';

describe('<Candidate />', () => {
  test('it should mount', () => {
    render(<Candidate />);
    
    const candidate = screen.getByTestId('Candidate');

    expect(candidate).toBeInTheDocument();
  });
});