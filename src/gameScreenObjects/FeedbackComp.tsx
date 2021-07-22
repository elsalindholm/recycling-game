import { observer } from 'mobx-react';
import React from 'react';


export const FeedbackComp: React.FC = observer(({ }) => {
  return (
    <div>
      <div>Item -> Bin</div>
      <div>Correct/Incorrect</div>
      <div>Blahdeblahdeblahdeblah</div>
    </div>
  );
});