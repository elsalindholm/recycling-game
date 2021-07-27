import { observer } from 'mobx-react';
import React from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';

import { WasteItem } from './WasteItems';

import './waste-item-comp.scss';

interface Props {
  wasteItem: WasteItem;
}

export const WasteItemComp: React.FC<Props> = observer(({ wasteItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  console.log('wasteItemComp render', wasteItem);
  const [_, drag] = useDrag({
    item: wasteItem,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });
  drag(ref);

  return (
    <div className={'waste-item-container'} ref={ref}>
      <div className={'waste-item'}>
        <div className={'waste-item-text'}>{wasteItem.id}</div>
      </div>
    </div>
  );
});
