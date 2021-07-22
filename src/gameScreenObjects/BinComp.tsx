import React from 'react';
import { observer } from 'mobx-react';
import { useDrop } from 'react-dnd';

import { WasteItem } from './WasteItems';
import { Bin } from './Bins';

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

  return (
    <div className={'bin-item'} ref={dropRef}>
      {bin.name}
    </div>
  );
});
