import React from 'react';
import { string } from 'prop-types';
import { renderText } from './textHelper';

const TestQuestion = ({ qIndex, description }) => (
    <div className="row">
        <div className="col-12">
            <div className="question-box">
                <h4>{qIndex ? `${qIndex}. Question:` : 'Question title:'}</h4>
                <h2>
                    <span>{renderText(description)}</span>
                </h2>

            </div>
        </div>
    </div>
);

TestQuestion.propTypes = {
    qIndex: string.isRequired,
    description: string.isRequired,
};

export default TestQuestion;
