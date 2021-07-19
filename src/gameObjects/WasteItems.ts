export interface WasteItem {
  id: string;
  type: string;
  //image: string;
  //typeOfWaste?: string;
  //acceptedBins: [];
  //errorMessage: string;
}

export const glassBottle: WasteItem = {
  id: 'Glass Bottle',
  type: 'wasteItem',
};

export const brokenGlass: WasteItem = {
  id: 'Broken Drinking Glass',
  type: 'wasteItem',
};

export const paper: WasteItem = {
  id: 'Paper',
  type: 'wasteItem',
};

export const pizzaBox: WasteItem = {
  id: 'Used Pizza Box',
  type: 'wasteItem',
};

export const brokenCrockery: WasteItem = {
  id: 'Broken Crockery',
  type: 'wasteItem',
};

export const usedBedsheet: WasteItem = {
  id: 'Used Bedsheet',
  type: 'wasteItem',
};

export const plasticBags: WasteItem = {
  id: 'Clean Plastic Bags',
  type: 'wasteItem',
};

export const smallElectronics: WasteItem = {
  id: 'Small Electronics',
  type: 'wasteItem',
};

export const teaBag: WasteItem = {
  id: 'Tea Bag',
  type: 'wasteItem',
};

export const looseTea: WasteItem = {
  id: 'Loose Tea Leaves',
  type: 'wasteItem',
};

export const foodScraps: WasteItem = {
  id: 'Food Scraps',
  type: 'wasteItem',
};

export const metalCan: WasteItem = {
  id: 'Metal Can',
  type: 'wasteItem',
};

export const cripsBags: WasteItem = {
  id: 'Crips Bags',
  type: 'wasteItem',
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
