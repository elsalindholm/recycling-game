import { observer } from 'mobx-react-lite';
import React from 'react';

import './score-feedback-comp.scss';

interface ScoreFeedbackProps {
  gameScore: number;
  endGame: () => void;
}

export const ScoreFeedbackComp: React.FC<ScoreFeedbackProps> = observer(
  ({ gameScore, endGame }) => {
    let feedback: string;
    switch (true) {
      case gameScore === 10:
        feedback = 'Fantastic job! You are amazing at recycling!';
        break;
      case gameScore < 10 && gameScore > 7:
        feedback = "Congratulations! You're pretty good at recycling. Keep it up!";
        break;
      case gameScore <= 7 && gameScore > 4:
        feedback =
          "Well done! There's room for improvement, but you've made a great start at recycling!";
        break;
      case gameScore <= 4 && gameScore >= 0:
        feedback =
          'Room for improvement! Check what you can recycle through your local council waste collection services!';
        break;
    }

    return (
      <div className={'score-feedback-comp'}>
        <div className={'score-feedback'}>{feedback}</div>
        <button className={'play-again-button'} onClick={() => endGame()}>
          PLAY AGAIN
        </button>
      </div>
    );
  }
);
