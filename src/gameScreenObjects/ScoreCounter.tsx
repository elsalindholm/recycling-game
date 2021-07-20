import { observer } from 'mobx-react';
import React from 'react';

import { GameState } from '../GameState';

interface ScoreCounterProps {
  gameState: GameState;
}

export const ScoreCounter: React.FC<ScoreCounterProps> = observer(({ gameState }) => {
  return <div>Score: {gameState.gameScore}</div>;
});
