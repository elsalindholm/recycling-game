import { action, observable } from 'mobx';

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

export class GameState {}
