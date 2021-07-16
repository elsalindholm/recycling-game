import React from 'react';
import { BinComp } from '../gameObjects/BinComp';

import {
  donateSell,
  foodWasteBin,
  gardenWasteBin,
  generalBin,
  glassBin,
  paperBin,
  plasticMetalBin,
  recyclingCentre,
} from '../gameObjects/Bins';

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
            EXIT GAME
          </button>
        </div>
        <div className={'game-grid'}>
          <div className={'bin-circle'}></div>
          <div className={'bin1-cont'}>
            <BinComp bin={generalBin} />
          </div>
          <div className={'bin2-cont'}>
            <BinComp bin={plasticMetalBin} />
          </div>
          <div className={'bin3-cont'}>
            <BinComp bin={paperBin} />
          </div>
          <div className={'bin4-cont'}>
            <BinComp bin={glassBin} />
          </div>
          <div className={'bin5-cont'}>
            <BinComp bin={foodWasteBin} />
          </div>
          <div className={'bin6-cont'}>
            <BinComp bin={gardenWasteBin} />
          </div>
          <div className={'bin7-cont'}>
            <BinComp bin={recyclingCentre} />
          </div>
          <div className={'bin8-cont'}>
            <BinComp bin={donateSell} />
          </div>

          <div className={'item-to-sort'}>Item to sort</div>
          <div className={'score'}>Score</div>
          <div className={'item-sort-counter'}>Items to sort counter</div>
        </div>
      </div>
    );
  }
}
