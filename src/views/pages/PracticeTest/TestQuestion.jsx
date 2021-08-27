import React from 'react';
import { object, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { speaker } from '../../../assets/icons/IconList';

const TestQuestion = ({ quesData, APImage }) => (
    <div className="row">
        <div className="col-12">
            <div className="question-box">
                <h4>Question - 1</h4>
                <h2><span className="span-one">{speaker}</span> <span>{quesData?.title}</span></h2>
                <div className="question-box-common mt-4">
                    {quesData?.objects?.map(() => (
                        <img key={uuid()} className="image" src={APImage} alt="answer" />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

TestQuestion.propTypes = {
    quesData: object.isRequired,
    APImage: string.isRequired,
};
export default TestQuestion;
