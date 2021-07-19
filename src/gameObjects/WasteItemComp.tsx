import React from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { WasteItem } from './WasteItems';

interface Props {
  wasteItem: WasteItem;
  moveItemToBin: () => void;
}

export const WasteItemComp: React.FC<Props> = ({ wasteItem }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    item: wasteItem,
    collect: 
    //collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });
  drag(ref);

  return (
    <div ref={ref} style={{ width: '50px', height: '50px', backgroundColor: 'pink' }}>
      {wasteItem.id}
    </div>
  );
};
