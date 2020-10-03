import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

function handleClick() {
  //
}

describe('<Button />', () => {
  test('it should mount', () => {
    render(<Button label="click" handleClick={handleClick} />);

    const button = screen.getByTestId('Button');

    expect(button).toBeInTheDocument();
  });
});
