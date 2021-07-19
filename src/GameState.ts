import { action, observable } from 'mobx';
import { Bin } from './gameObjects/Bins';

import { WasteItem, wasteItems } from './gameObjects/WasteItems';

export enum BinType {
  GENERAL = 'general',
  PLASTICMETAL = 'plastic-metal',
  PAPER = 'paper',
  GLASS = 'glass',
  FOOD = 'food',
  GARDEN = 'garden',
  RECYCLINGCENTRE = 'recycling-centre',
  DONATESELL = 'donate-sell',
}

export class GameState {
  private readonly noOfWasteItems: number = 10;
  private itemsToSort: WasteItem[] = [];

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
  }

  @action public moveItemToBin(item: WasteItem, bin: Bin) {
    console.log(`${item.id} was placed into ${bin.name}`);
  }
}
