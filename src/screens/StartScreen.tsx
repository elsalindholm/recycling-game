import React from 'react';

import { AppScreens, AppState } from '../AppState';

import './start-screen.scss';

interface StartScreenProps {
  appState: AppState;
}

export class StartScreen extends React.PureComponent<StartScreenProps> {
  render() {
    const { appState } = this.props;
    return (
      <div className={'start-screen'}>
        <div className={'start-screen-title'}>RECYCLING GAME</div>
        <div className={'start-screen-blurb'}>
          Recycle 10 items by dragging and dropping them into the correct bin/recycling option.
        </div>
        <div className={'start-screen-blurb'}>
          This recycling game is based on recycling in Falkirk Council area in Scotland. Please
          visit your local council's website to double check how different materials are recycled in
          your area.
        </div>
        <button className={'start-screen-button'} onClick={() => appState.startGame()}>
          START GAME
        </button>
        <div className={'start-screen-blurb'}>
          This game has been built as a web development portfolio piece and has not been made in any
          association with Falkirk Council.
        </div>
      </div>
    );
  }
}
