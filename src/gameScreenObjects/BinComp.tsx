import React from 'react';
import { observer } from 'mobx-react';
import { useDrop } from 'react-dnd';

import { WasteItem } from './WasteItems';
import { Bin, BinType } from './Bins';

import './bin-comp.scss';

interface BinProps {
  bin: Bin;
  onDrop: (bin: Bin) => void;
}

export const BinComp: React.FC<BinProps> = observer(({ bin, onDrop }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'wasteItem',
    collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
    drop: (_item: WasteItem) => {
      if (isOver) {
        onDrop(bin);
      }

      return;
    },
  });

  let binBackground: string;
  switch (bin.binType) {
    case BinType.GENERAL:
      binBackground = 'general';
      break;
    case BinType.PLASTICMETAL:
      binBackground = 'plastic-metal';
      break;
    case BinType.PAPER:
      binBackground = 'paper';
      break;
    case BinType.GLASS:
      binBackground = 'glass';
      break;
    case BinType.FOOD:
      binBackground = 'food';
      break;
    case BinType.GARDEN:
      binBackground = 'garden';
      break;
    case BinType.RECYCLINGCENTRE:
      binBackground = 'recycling-centre';
      break;
    case BinType.DONATESELL:
      binBackground = 'donate-sell';
      break;
  }

  return (
    <div className={'bin-item ' + binBackground} ref={dropRef}>
      {bin.name}
    </div>
  );
});
