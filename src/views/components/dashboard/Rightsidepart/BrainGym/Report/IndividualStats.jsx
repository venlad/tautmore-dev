import React from 'react';
import IndividualCommon from './IndividualCommon';
import Calendar from '../../../../../../assets/images/Calendar.svg';
import HandGesture from '../../../../../../assets/images/HandGesture.svg';
import Target from '../../../../../../assets/images/Target.svg';
import CheckList from '../../../../../../assets/images/CheckList.svg';
import Flash from '../../../../../../assets/images/flash.svg';

const IndividualStats = () => (
    <>
        <section className="heavy-details">
            <div className="stats">
                <IndividualCommon
                    image={Calendar}
                    title="Date"
                    desc="16th Aug"
                />
                <IndividualCommon
                    image={HandGesture}
                    title="Total score"
                    desc="270 points"
                />
                <IndividualCommon
                    image={Target}
                    title="Accuracy"
                    desc="90%"
                />
                <IndividualCommon
                    image={CheckList}
                    title="Right answers"
                    desc="27 out of 30"
                />
                <IndividualCommon
                    image={Flash}
                    title="Average speed"
                    desc="5.32 sec / question"
                />

            </div>

            <button className="review-incorrect-button" type="button">Review incorrect answers</button>

        </section>
    </>
);

export default IndividualStats;
