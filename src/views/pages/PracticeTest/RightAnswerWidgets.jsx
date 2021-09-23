import React from 'react';

const RightAnswerWidgets = () => (
    <div className="right-answer-container">
        <div className="right-answer-modal-bg" />
        <div className="right-answer-modal">
            <div className="success-img" />
            <h1>Fantastic !</h1>
            <p className="score-text">
                Your Score: <span className="score">20</span>
                <span className="success-badge">+10</span>
            </p>
            <div className="success-bonus">
                <p>
                    Speed bonus<span>+3</span>
                </p>
            </div>
        </div>
    </div>
);

export default RightAnswerWidgets;
