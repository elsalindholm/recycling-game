import { observer } from 'mobx-react';
import React from 'react';
import { GameState } from '../GameState';

interface ItemCounterProps {
  gameState: GameState;
}

export const ItemCounter: React.FC<ItemCounterProps> = observer(({ gameState }) => {
  return (
    <div>
      {gameState.displayItemIndex + 1} / {gameState.noOfWasteItems}
    </div>
  );
});
