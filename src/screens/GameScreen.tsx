import React from 'react';

import { GameState } from '../GameState';

interface GameScreenProps {
  gameState: GameState;
  endGame: () => void;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { endGame } = this.props;

    return (
      <div>
        <div>This is the game screen.</div>
        <button onClick={() => endGame()}>Exit Game</button>
      </div>
    );
  }
}
