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

export interface Bin {
  name: string;
  image: string;
  binType: BinType;
}

export const generalBin: Bin = {
  name: 'General Bin',
  image: 'none',
  binType: BinType.GENERAL,
};

export const plasticMetalBin: Bin = {
  name: 'Plastic & Metal Bin',
  image: 'none',
  binType: BinType.PLASTICMETAL,
};

export const paperBin: Bin = {
  name: 'Paper Bin',
  image: 'none',
  binType: BinType.PAPER,
};

export const glassBin: Bin = {
  name: 'Glass Bin (Black Box)',
  image: 'none',
  binType: BinType.GLASS,
};

export const foodWasteBin: Bin = {
  name: 'Food Waste Bin',
  image: 'none',
  binType: BinType.FOOD,
};

export const gardenWasteBin: Bin = {
  name: 'Garden Waste Bin',
  image: 'none',
  binType: BinType.GARDEN,
};

export const recyclingCentre: Bin = {
  name: 'Recycling Centre or Point',
  image: 'none',
  binType: BinType.RECYCLINGCENTRE,
};

export const donateSell: Bin = {
  name: 'Donate or Sell',
  image: 'none',
  binType: BinType.DONATESELL,
};
