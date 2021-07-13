import React from 'react';

import { AppScreens, AppState } from '../AppState';

interface GameScreenProps {
  appState: AppState;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { appState } = this.props;

    return (
      <div>
        <div>This is the game screen.</div>
        <button onClick={() => appState.toggleScreen(AppScreens.START)}>Exit Game</button>
      </div>
    );
  }
}
