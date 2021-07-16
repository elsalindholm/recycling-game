import React from 'react';
import { Bin } from './Bins';

import './bin-comp.scss';

interface BinProps {
  bin: Bin;
}

export const BinComp: React.FC<BinProps> = ({ bin }) => {
  return (
    <div className={'bin-item'}>
      <div className={'bin-image'}></div>
      <div className={'bin-name'}>{bin.name}</div>
    </div>
  );
};
