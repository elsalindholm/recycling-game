import { observer } from 'mobx-react';
import React from 'react';
import { Bin } from './Bins';
import { WasteItem } from './WasteItems';

export interface FeedbackItemProps {
  wasteItem: WasteItem;
  bin: Bin;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = observer(({ wasteItem, bin }) => {
  return (
    <div>
      <div>
        {wasteItem.id} {'-->'} {bin.name}
      </div>
      <div>
        Feedack goes here but need to figure out where to make the decision on whether it's positive
        or negative feedback.
      </div>
    </div>
  );
});
