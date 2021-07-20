import { BinType } from './Bins';

export interface WasteItem {
  id: string;
  type: string;
  acceptedBins: BinType[];
  //errorMessage: string;
}

export const glassBottle: WasteItem = {
  id: 'Glass Bottle',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS],
};

export const brokenGlass: WasteItem = {
  id: 'Broken Drinking Glass',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
};

export const paper: WasteItem = {
  id: 'Paper',
  type: 'wasteItem',
  acceptedBins: [BinType.PAPER],
};

export const pizzaBox: WasteItem = {
  id: 'Used Pizza Box',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
};

export const brokenCrockery: WasteItem = {
  id: 'Broken Crockery',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
};

export const usedBedsheet: WasteItem = {
  id: 'Used Bedsheet',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS, BinType.RECYCLINGCENTRE, BinType.DONATESELL],
};

export const plasticBags: WasteItem = {
  id: 'Clean Plastic Bags',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL, BinType.RECYCLINGCENTRE],
};

export const smallElectronics: WasteItem = {
  id: 'Small Electronics',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS, BinType.RECYCLINGCENTRE, BinType.DONATESELL],
};

export const teaBag: WasteItem = {
  id: 'Tea Bag',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL, BinType.FOOD],
};

export const looseTea: WasteItem = {
  id: 'Loose Tea Leaves',
  type: 'wasteItem',
  acceptedBins: [BinType.FOOD],
};

export const foodScraps: WasteItem = {
  id: 'Food Scraps',
  type: 'wasteItem',
  acceptedBins: [BinType.FOOD],
};

export const metalCan: WasteItem = {
  id: 'Metal Can',
  type: 'wasteItem',
  acceptedBins: [BinType.PLASTICMETAL],
};

export const cripsBags: WasteItem = {
  id: 'Crips Bags',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
};

export const wasteItems = [
  glassBottle,
  brokenGlass,
  paper,
  pizzaBox,
  brokenCrockery,
  usedBedsheet,
  plasticBags,
  smallElectronics,
  teaBag,
  looseTea,
  foodScraps,
  metalCan,
  cripsBags,
];
