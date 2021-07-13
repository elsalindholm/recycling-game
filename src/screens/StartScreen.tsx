import React from 'react';

import { AppScreens, AppState } from '../AppState';

interface StartScreenProps {
  appState: AppState;
}

export class StartScreen extends React.PureComponent<StartScreenProps> {
  render() {
    const { appState } = this.props;
    return (
      <div>
        <div>This is the start screen.</div>
        <button onClick={() => appState.toggleScreen(AppScreens.GAME)}>Start Game</button>
      </div>
    );
  }
}
