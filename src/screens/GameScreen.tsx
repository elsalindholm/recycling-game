import React from 'react';

import { GameState } from '../GameState';

import './game-screen.scss';

interface GameScreenProps {
  gameState: GameState;
  endGame: () => void;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { endGame } = this.props;

    return (
      <div className={'game-screen'}>
        <div>This is the game screen.</div>
        <button onClick={() => endGame()}>Exit Game</button>
      </div>
    );
  }
}
