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
        <div className={'game-grid'}>
          <div className={'bin-circle'}></div>

          <div className={'grid-item bin bin1'}>Bin 1</div>
          <div className={'grid-item bin bin2'}>Bin 2</div>
          <div className={'grid-item bin bin3'}>Bin 3</div>
          <div className={'grid-item bin bin4'}>Bin 4</div>
          <div className={'grid-item bin bin5'}>Bin 5</div>
          <div className={'grid-item bin bin6'}>Bin 6</div>
          <div className={'grid-item bin bin7'}>Bin 7</div>
          <div className={'grid-item bin bin8'}>Bin 8</div>
          <div className={'grid-item item-to-sort'}>Item to sort</div>
          <div className={'grid-item score'}>Score</div>
          <div className={'grid-item item-sort-counter'}>Items to sort counter</div>
        </div>
      </div>
    );
  }
}
