export interface WasteItem {
  name: string;
  //image: string;
  //typeOfWaste?: string;
  //acceptedBins: [];
  //errorMessage: string;
}

export const glassBottle: WasteItem = {
  name: 'Glass Bottle',
};

export const brokenGlass: WasteItem = {
  name: 'Broken Drinking Glass',
};

export const paper: WasteItem = {
  name: 'Paper',
};

export const pizzaBox: WasteItem = {
  name: 'Used Pizza Box',
};

export const brokenCrockery: WasteItem = {
  name: 'Broken Crockery',
};

export const usedBedsheet: WasteItem = {
  name: 'Used Bedsheet',
};

export const plasticBags: WasteItem = {
  name: 'Clean Plastic Bags',
};

export const smallElectronics: WasteItem = {
  name: 'Small Electronics',
};

export const teaBag: WasteItem = {
  name: 'Tea Bag',
};

export const looseTea: WasteItem = {
  name: 'Loose Tea Leaves',
};

export const foodScraps: WasteItem = {
  name: 'Food Scraps',
};

export const metalCan: WasteItem = {
  name: 'Metal Can',
};

export const cripsBags: WasteItem = {
  name: 'Crips Bags',
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
