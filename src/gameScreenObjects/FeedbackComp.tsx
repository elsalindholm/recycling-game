import { observer } from 'mobx-react';
import React from 'react';

import { FeedbackItem } from '../GameState';

import './feedback-comp.scss';

export interface FeedbackItemProps {
  feedbackItem: FeedbackItem;
}

export const FeedbackItemComp: React.FC<FeedbackItemProps> = observer(({ feedbackItem }) => {
  return (
    <div className={'feedback-comp'}>
      <div className={'feedback-row1'}>
        {feedbackItem.wasteItem.id} {'-->'} {feedbackItem.bin.name}
      </div>
      <div className={'feedback-row2'}>
        {feedbackItem.answerCorrect ? 'Correct!' : 'Oops, wrong!'}
      </div>
      <div className={'feedback-row3'}>
        {feedbackItem.answerCorrect
          ? feedbackItem.wasteItem.messageForCorrect
          : feedbackItem.wasteItem.messageForIncorrect}
      </div>
    </div>
  );
});
