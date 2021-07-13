import { BinType } from '../GameState';

export interface Bin {
  name: string;
  image: string;
  binType: BinType;
}

export const GeneralBin: Bin = {
  name: 'General Bin',
  image: 'none',
  binType: BinType.GENERAL,
};

export const PlasticMetalBin: Bin = {
  name: 'Plastic & Metal Bin',
  image: 'none',
  binType: BinType.PLASTICMETAL,
};

export const PaperBin: Bin = {
  name: 'Paper Bin',
  image: 'none',
  binType: BinType.PAPER,
};

export const GlassBin: Bin = {
  name: 'Glass Bin',
  image: 'none',
  binType: BinType.GLASS,
};

export const FoodWasteBin: Bin = {
  name: 'Food Waste Bin',
  image: 'none',
  binType: BinType.FOOD,
};

export const GardenWasteBin: Bin = {
  name: 'Garden Waste Bin',
  image: 'none',
  binType: BinType.GARDEN,
};

export const RecyclingCentre: Bin = {
  name: 'Recycling Centre or Point',
  image: 'none',
  binType: BinType.RECYCLINGCENTRE,
};

export const DonateSell: Bin = {
  name: 'Donate or Sell',
  image: 'none',
  binType: BinType.DONATESELL,
};
