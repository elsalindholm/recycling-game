import { action, observable } from 'mobx';

import { GameState } from './GameState';

export enum AppScreens {
  START = 'start',
  GAME = 'game',
  END = 'end',
}

export class AppState {
  @observable public currentScreen: AppScreens = AppScreens.START;
  public gameState?: GameState;

  @action public toggleScreen(screen: AppScreens) {
    this.currentScreen = screen;
  }

  public startGame() {
    this.gameState = new GameState();

    this.toggleScreen(AppScreens.GAME);
  }

  public exitGame() {
    this.gameState = undefined;
    this.toggleScreen(AppScreens.START);
  }
}
