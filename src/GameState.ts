import { action, observable } from 'mobx';

import { Bin } from './gameObjects/Bins';
import { WasteItem, wasteItems } from './gameObjects/WasteItems';

export class GameState {
  private readonly noOfWasteItems: number = 10;
  private itemsToSort: WasteItem[] = [];
  @observable public displayItemIndex: number = 0;
  @observable public currentItem: WasteItem;

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
  }

  @action private displayItemToSort() {
    if (this.displayItemIndex < this.itemsToSort.length) {
      this.currentItem = this.itemsToSort[this.displayItemIndex];
      console.log(this.currentItem);
      this.displayItemIndex++;
    }
  }
}
