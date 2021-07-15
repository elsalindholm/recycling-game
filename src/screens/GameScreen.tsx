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
        <div className={'game-grid'}>
          <div className={'exit-button-container'}>
            <button className={'game-screen-button'} onClick={() => endGame()}>
              Exit Game
            </button>
          </div>
          <div className={'grid-item bin1'}>Bin 1</div>
          <div className={' grid-item bin2'}>Bin 2</div>
          <div className={' grid-item bin3'}>Bin 3</div>
          <div className={'grid-item bin4'}>Bin 4</div>
          <div className={' grid-item bin5'}>Bin 5</div>
          <div className={'grid-item bin6'}>Bin 6</div>
          <div className={'grid-item bin7'}>Bin 7</div>
          <div className={'grid-item bin8'}>Bin 8</div>
          <div className={'grid-item item-to-sort'}>Item to sort</div>
          <div className={'grid-item score'}>Score</div>
          <div className={'grid-item item-sort-counter'}>Items to sort counter</div>
        </div>
      </div>
    );
  }
}
