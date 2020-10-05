import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import GameOver from './GameOver';

describe('<GameOver />', () => {
    test('it should mount', () => {
        render(<GameOver finishGame={() => null} startOver={() => null} />);

        const gameOver = screen.getByTestId('GameOver');

        expect(gameOver).toBeInTheDocument();
    });
});
