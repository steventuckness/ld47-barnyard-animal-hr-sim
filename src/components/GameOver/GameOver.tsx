import React from 'react';

import styles from './GameOver.module.css';

interface GameOverProps {
    finishGame: () => void;
    startOver: () => void;
}

const GameOver: React.FC<GameOverProps> = (props: GameOverProps) => {
    props.finishGame();
    return (
        <div className={styles.GameOver} data-testid="GameOver">
            <p>GameOver!</p>
            <button onClick={props.startOver}>Start Again</button>
        </div>
    );
};

export default GameOver;
