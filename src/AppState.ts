import { action, observable } from 'mobx';

export enum AppScreens {
  START = 'start',
  GAME = 'game',
  END = 'end',
}

export class AppState {
  @observable public currentScreen: AppScreens = AppScreens.START;

  @action public toggleScreen(screen: AppScreens) {
    this.currentScreen = screen;
  }
}
