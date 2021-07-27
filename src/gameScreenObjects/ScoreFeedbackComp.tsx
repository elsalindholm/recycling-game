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
    switch (gameScore) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        feedback =
          'Room for improvement! Check what you can recycle through your local council waste collection services!';
        break;
      case 5:
      case 6:
      case 7:
        feedback =
          "Well done! There's room for improvement, but you've made a great start at recycling!";
        break;
      case 8:
      case 9:
        feedback = "Congratulations! You're pretty good at recycling. Keep it up!";
        break;
      case 10:
        feedback = 'Fantastic job! You are amazing at recycling!';
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
