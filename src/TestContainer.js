
import './TestContainer.css'
import { TryAgain } from './TryAgain';
import { TypingChallengeContainer } from './TypingChallengeContainer';


export const TestContainer = ({
    handleOnType,
    timerValue,
    timerStarted,
    triggerTryAgain,
    selectedParagraph,
    words,
    characters,
    mistakes
}) => {
    

    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                timerValue > 0
                    ? <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                        timerStarted={timerStarted}
                        timerValue={timerValue}
                        handleOnType={handleOnType}
                        selectedParagraph={selectedParagraph}
                        words={words}
                        characters={characters}
                        mistakes={mistakes}/>
                        
                    </div>
                    : <div className="try-again-cont">
                    <TryAgain
                    triggerTryAgain={triggerTryAgain}
                        words={words}
                            characters={characters}
                            mistakes={mistakes}
                    />

                    </div>
            }            
        </div>
    )
}