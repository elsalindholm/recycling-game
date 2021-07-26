import { observer } from 'mobx-react';
import React from 'react';
import { GameState } from '../GameState';

import './item-counter.scss';

interface ItemCounterProps {
  gameState: GameState;
}

export const ItemCounter: React.FC<ItemCounterProps> = observer(({ gameState }) => {
  return (
    <div className={'item-counter'}>
      {gameState.displayItemIndex + 1} / {gameState.noOfWasteItems}
    </div>
  );
});
