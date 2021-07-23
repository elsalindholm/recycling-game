import { action, observable } from 'mobx';

import { Bin } from './gameScreenObjects/Bins';
import { WasteItem, wasteItems } from './gameScreenObjects/WasteItems';

export interface FeedbackItem {
  wasteItem: WasteItem;
  bin: Bin;
  answerCorrect: boolean;
}

export class GameState {
  public readonly noOfWasteItems: number = 10;
  private itemsToSort: WasteItem[] = [];
  @observable public displayItemIndex: number = -1;
  @observable public currentItem: WasteItem;
  @observable public gameScore: number = 0;
  @observable public feedbackItems: FeedbackItem[] = [];

  constructor() {
    this.setupGame();
  }

  @action private setupGame() {
    const allWasteItems = [...wasteItems];
    const gameWasteItems: WasteItem[] = [];

    for (let i = 0; i < this.noOfWasteItems; i++) {
      let index = Math.floor(Math.random() * (allWasteItems.length - 1));
      gameWasteItems.push(allWasteItems[index]);
      allWasteItems.splice(index, 1);
    }

    this.itemsToSort = gameWasteItems;
    this.displayItemToSort();
  }

  @action public moveItemToBin(bin: Bin) {
    console.log(`${this.currentItem.id} was placed into ${bin.name}`);

    const result = this.currentItem.acceptedBins.includes(bin.binType);

    const feedbackItem: FeedbackItem = {
      wasteItem: this.currentItem,
      bin: bin,
      answerCorrect: result,
    };
    this.feedbackItems.push(feedbackItem);

    if (result) {
      this.gameScore++;
    }

    this.displayItemToSort();
  }

  @action private displayItemToSort() {
    if (this.displayItemIndex < this.itemsToSort.length) {
      this.displayItemIndex++;
      this.currentItem = this.itemsToSort[this.displayItemIndex];
    } else {
      this.currentItem = undefined;
      this.displayItemIndex = undefined;
    }
  }
}
