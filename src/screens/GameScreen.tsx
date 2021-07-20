import React from 'react';

import { BinComp } from '../gameObjects/BinComp';
import {
  Bin,
  donateSell,
  foodWasteBin,
  gardenWasteBin,
  generalBin,
  glassBin,
  paperBin,
  plasticMetalBin,
  recyclingCentre,
} from '../gameObjects/Bins';
import { WasteItemComp } from '../gameObjects/WasteItemComp';
import { WasteItem } from '../gameObjects/WasteItems';
import { GameState } from '../GameState';

import './game-screen.scss';

interface GameScreenProps {
  gameState: GameState;
  endGame: () => void;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { endGame, gameState } = this.props;

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
            <BinComp bin={generalBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin2-cont'}>
            <BinComp bin={plasticMetalBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin3-cont'}>
            <BinComp bin={paperBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin4-cont'}>
            <BinComp bin={glassBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin5-cont'}>
            <BinComp bin={foodWasteBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin6-cont'}>
            <BinComp bin={gardenWasteBin} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin7-cont'}>
            <BinComp bin={recyclingCentre} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>
          <div className={'bin8-cont'}>
            <BinComp bin={donateSell} onDrop={(bin: Bin) => gameState.moveItemToBin(bin)} />
          </div>

          <div className={'item-to-sort'}>
            <WasteItemComp wasteItem={gameState.currentItem} />
          </div>
          <div className={'score'}>Score</div>
          <div className={'item-sort-counter'}>Items to sort counter</div>
        </div>
      </div>
    );
  }
}
