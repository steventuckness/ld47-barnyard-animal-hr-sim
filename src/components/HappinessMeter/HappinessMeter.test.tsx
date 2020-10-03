import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HappinessMeter from './HappinessMeter';

describe('<HappinessMeter />', () => {
  test('it should mount', () => {
    render(<HappinessMeter />);
    
    const happinessMeter = screen.getByTestId('HappinessMeter');

    expect(happinessMeter).toBeInTheDocument();
  });
});