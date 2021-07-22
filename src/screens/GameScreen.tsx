import { observer } from 'mobx-react';
import React from 'react';

import { BinComp } from '../gameScreenObjects/BinComp';
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
} from '../gameScreenObjects/Bins';
import { ItemCounter } from '../gameScreenObjects/ItemCounter';
import { ScoreCounter } from '../gameScreenObjects/ScoreCounter';
import { WasteItemComp } from '../gameScreenObjects/WasteItemComp';
import { GameState } from '../GameState';

import './game-screen.scss';

interface GameScreenProps {
  gameState: GameState;
  endGame: () => void;
}

@observer
export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { endGame, gameState } = this.props;

    let itemToSort: JSX.Element;
    if (gameState.currentItem) {
      itemToSort = <WasteItemComp wasteItem={gameState.currentItem} />;
    } else {
      itemToSort = <div>Game ended!</div>;
    }

    let itemCounter: JSX.Element;
    if (gameState.displayItemIndex < gameState.noOfWasteItems) {
      itemCounter = <ItemCounter gameState={gameState} />;
    } else {
      itemCounter = <div>10 / 10</div>;
    }

    return (
      <div className={'game-screen'}>
        <div className={'game-screen-navbar'}>
          <button className={'game-screen-button'} onClick={() => endGame()}>
            EXIT GAME
          </button>
        </div>
        <div className={'game-screen-contents'}>
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

            <div className={'item-to-sort'}>{itemToSort}</div>
            <div className={'score'}>
              <ScoreCounter gameState={gameState} />
            </div>
            <div className={'item-sort-counter'}>{itemCounter}</div>
          </div>
          <div className={'feedback-window'}>
            Game Feedback
            <div></div>
            <div>
              <button>Play Again</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
