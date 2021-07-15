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
        <div className={'game-screen-navbar'}>
          <button className={'game-screen-button'} onClick={() => endGame()}>
            Exit Game
          </button>
        </div>
        <div className={'game-grid'}></div>
      </div>
    );
  }
}
