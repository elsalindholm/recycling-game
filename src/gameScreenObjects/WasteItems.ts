import { BinType } from './Bins';

export interface WasteItem {
  id: string;
  type: string;
  acceptedBins: BinType[];
  messageForCorrect: string;
  messageForIncorrect: string;
}

export const glassBottle: WasteItem = {
  id: 'Glass Bottle',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS, BinType.RECYCLINGCENTRE],
  messageForCorrect:
    'Yes! Glass bottles can be recycled by putting them into the Black Box or by taking them to a recycling centre/point.',
  messageForIncorrect:
    'Glass should be put in to the black kerbside collection bin or taken to a recycling point!',
};

export const brokenGlass: WasteItem = {
  id: 'Broken Drinking Glass',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL, BinType.RECYCLINGCENTRE],
  messageForCorrect:
    'Yes, broken glass should be disposed of safely by wrapping it in newspaper and putting it into the Green Bin or taking it to a recycling point/centre.',
  messageForIncorrect:
    'Broken glass can cause harm in the wrong bin! Take it to your local recycling centre or wrap it carefully with newspaper and put it in the Green Bin(general waste).',
};

export const paper: WasteItem = {
  id: 'Paper',
  type: 'wasteItem',
  acceptedBins: [BinType.PAPER],
  messageForCorrect: 'Clean and dry paper can be put into the Burgundy Bin.',
  messageForIncorrect: 'Clean and dry paper waste should go into the Burgundy Bin (paper & card)!',
};

export const pizzaBox: WasteItem = {
  id: 'Used Pizza Box',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
  messageForCorrect:
    'Yes, pizza boxes cannot be recycled because stains like dirt, food or grease cannot be removed during the recycling process.',
  messageForIncorrect:
    'Unfortunately, pizza boxes need to be put in the Green Bin (general waste). Card with stains or dirt like food and grease cannot be recycled because the cellulose fibres have been contaminated.',
};

export const brokenCrockery: WasteItem = {
  id: 'Broken Crockery',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
  messageForCorrect: 'Broken crockery should be disposed of safely by putting it in the Green Bin.',
  messageForIncorrect:
    'Broken crockery sould be wrapped and put into the Green Bin (general waste). Crockery that is still intact and usable, can be donated or sold onwards!',
};

export const usedBedsheet: WasteItem = {
  id: 'Used Bedsheet',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS, BinType.RECYCLINGCENTRE, BinType.DONATESELL],
  messageForCorrect:
    'Clean and dry bed linen can be recycled by putting them in a textile bag on top of the Black Box or by taking them directly to a recycling centre/point. You could also check if your local charity shop might be able to take them!',
  messageForIncorrect:
    'Clean and dry used textiles can be put in a textile bag on top of the Black Box. They can also be taken to recycling centres or donated to charity. Do check with your local charity shop if they can accept these textile items before dropping them off.',
};

export const plasticBags: WasteItem = {
  id: 'Clean Plastic Bags',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL, BinType.RECYCLINGCENTRE],
  messageForCorrect:
    'Yes, in most cases plastic bags must be put in the Gree Bin. However, you could check if any of your local supermarkets might have a plastic bag recycling scheme!',
  messageForIncorrect:
    'Plastic bags are not widely recycled at the moment, so often they have to be put in the Green Bin(general waste). Do check if any of your local supermarkets have a plastic bag recycling scheme!',
};

export const smallElectronics: WasteItem = {
  id: 'Small Electronics',
  type: 'wasteItem',
  acceptedBins: [BinType.GLASS, BinType.RECYCLINGCENTRE, BinType.DONATESELL],
  messageForCorrect:
    'If your small electronics are in safe, working condition, consider selling/donating. If they are broken, you can put them in you Black Box or take them to a recycling centre.',
  messageForIncorrect:
    'Working small electronics could be donated or sold on. Broken small electronics (hairdryers, hair straighteners, radios, irons, kettles, toasters, electrical toys, electrical drills and tools) can be recycled by putting them into the Black Bin or by taking them to a recycling centre.',
};

export const teaBag: WasteItem = {
  id: 'Tea Bag',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL, BinType.FOOD],
  messageForCorrect:
    'If your tea bag is plastic free, you can pop it into your food waste bin. If not, put it into the Green Bin.',
  messageForIncorrect:
    'Does your teabag contain plastic? If yes, it needs to be put in the Green Bin. Plastic free teabags can be put in the Food Waste Bin for some extra green points!',
};

export const looseTea: WasteItem = {
  id: 'Loose Tea Leaves',
  type: 'wasteItem',
  acceptedBins: [BinType.FOOD],
  messageForCorrect:
    'Yes, loose tea goes into the food bin! You could also use it as a fertiliser for your plants, if you have a garden!',
  messageForIncorrect:
    'Loose Tea Leaves belong to the Food Bin! Even better, you could also use them to fertilise your plants or put them in our compost if yo have one!',
};

export const foodScraps: WasteItem = {
  id: 'Food Scraps',
  type: 'wasteItem',
  acceptedBins: [BinType.FOOD],
  messageForCorrect: 'Yes, food scraps belong into the food bin or a compost, if you have one!',
  messageForIncorrect:
    'Food scraps can be put into your Food Bin! They could also be composted, if you have a compost!',
};

export const metalCan: WasteItem = {
  id: 'Metal Can',
  type: 'wasteItem',
  acceptedBins: [BinType.PLASTICMETAL],
  messageForCorrect:
    'Metal cans should be cleaned and put into the Blue Bin(plastic,metal,cartons).',
  messageForIncorrect:
    'Metal cans should be cleaned and put into the Blue Bin(plastic,metal,cartons).',
};

export const cripsBags: WasteItem = {
  id: 'Crips Bags',
  type: 'wasteItem',
  acceptedBins: [BinType.GENERAL],
  messageForCorrect:
    'Crisp bags are not yet widely recyclable and therefore often need to be put into the Green Bin(general waste). Do check if your local supermarket has a crisp bag recycling point!',
  messageForIncorrect:
    'Crisp bags are not yet widely recyclable and therefore often need to be put into the Green Bin(general waste). Do check if your local supermarket has a crisp bag recycling point!',
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
