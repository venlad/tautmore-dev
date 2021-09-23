import React from 'react';
import { func, bool } from 'prop-types';
import { chevRightIcon } from './icons';

const TestSubmitButton = ({ handleSubmitAnswer, isSubmitValid }) => {
    const buttonClass = isSubmitValid
        ? 'button-wrapper-active'
        : 'button-wrapper';

    return (
        <div className="row">
            <div className="col-12 mt-4 mb-4">
                <button
                    type="button"
                    className="submit-answer-button"
                    onClick={() => handleSubmitAnswer()}
                    disabled={!isSubmitValid}
                >
                    <div
                        className={`${buttonClass} d-flex align-items-center justify-content-between`}
                    >
                        <span>Submit</span>
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">
                            {chevRightIcon()}
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

TestSubmitButton.propTypes = {
    handleSubmitAnswer: func.isRequired,
    isSubmitValid: bool.isRequired,
};
export default TestSubmitButton;
