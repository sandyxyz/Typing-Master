import { ChallengeDetailsCard } from './ChallengeDetailsCard';
import { TypingChallenge } from './TypingChallenge';
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = ({
    handleOnType,
    timerValue,
    timerStarted,
    selectedParagraph,
    words,
    characters,
    mistakes
}) => {
    return (
        <div className="typing-challenge-container">
        
            <div className="details-container">
                {/* Words Typed */}
                
            <ChallengeDetailsCard
            cardName="Words"
            cardValue={words}/>
            
            


                {/* Characters Typed */}
                <ChallengeDetailsCard
            cardName="Characters"
            cardValue={characters}/>
                

                {/* Mistakes */}
                <ChallengeDetailsCard
            cardName="Mistakes"
            cardValue={mistakes}/>
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
           <TypingChallenge
           timerStarted={timerStarted}
           timerValue={timerValue}
           handleOnType={handleOnType}
           selectedParagraph={selectedParagraph}/>
            </div>
        </div>
    )
}