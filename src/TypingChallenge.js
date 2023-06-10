import './TypingChallenge.css';

export const TypingChallenge = ({handleOnType,
timerValue,
timerStarted,
selectedParagraph
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className='timer'>00:{timerValue >= 10 ? timerValue : `0${timerValue}`}</p>
                <p className='timer-info'>{!timerStarted && 'start typing to start the test!'}</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <textarea className='textarea' disabled={true}
                    value={selectedParagraph}></textarea>
                </div>
                <div className="textarea-right">
                    <textarea 
                    onChange={(e)=>handleOnType(e.target.value)}
                    className='textarea'
                    placeholder='start typing here to start the test'></textarea>
                </div>
            </div>
        </div>
    )
}