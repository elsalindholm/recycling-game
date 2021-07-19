import React from 'react';
import { Bin } from './Bins';
import { useDrag, useDrop } from 'react-dnd';

import './bin-comp.scss';

interface BinProps {
  bin: Bin;
}

export const BinComp: React.FC<BinProps> = ({ bin }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'wasteItem',
    collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
    drop: (item) => {
      if (isOver) {
        console.log(`dropped item onto ${bin.name}`);
      }
      return;
    },
  });

  return (
    <div className={'bin-item'} ref={dropRef}>
      <div className={'bin-image'}></div>
      <div className={'bin-name'}>{bin.name}</div>
    </div>
  );
};
