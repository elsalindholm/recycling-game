import { observer } from 'mobx-react';
import React from 'react';

import { GameState } from '../GameState';

import './score-counter.scss';

interface ScoreCounterProps {
  gameState: GameState;
}

export const ScoreCounter: React.FC<ScoreCounterProps> = observer(({ gameState }) => {
  return <div className={'score-counter'}>SCORE: {gameState.gameScore}</div>;
});
