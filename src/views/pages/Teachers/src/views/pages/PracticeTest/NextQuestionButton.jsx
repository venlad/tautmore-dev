import React from 'react';
import { chevRight } from '../../../assets/icons/IconList';

const NextQuestionButton = () => (
    <button type="button" className="button-common">
        Next question
        <span>{chevRight}</span>
    </button>
);

export default NextQuestionButton;
