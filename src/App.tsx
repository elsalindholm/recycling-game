import { observer } from 'mobx-react';
import React from 'react';

import { AppScreens, AppState } from './AppState';
import { EndScreen } from './screens/EndScreen';
import { GameScreen } from './screens/GameScreen';
import { StartScreen } from './screens/StartScreen';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  render() {
    let page: JSX.Element;
    switch (this.appState.currentScreen) {
      case AppScreens.START:
        page = <StartScreen appState={this.appState} />;
        break;
      case AppScreens.GAME:
        if (this.appState.gameState) {
          page = (
            <GameScreen
              endGame={() => this.appState.exitGame()}
              gameState={this.appState.gameState}
            />
          );
        }
        break;
      case AppScreens.END:
        page = <EndScreen />;
        break;
      default:
        page = <StartScreen appState={this.appState} />;
        break;
    }

    return <div id={'app-root'}>{page}</div>;
  }
}
