import React from 'react';
import { func, object } from 'prop-types';
import IndividualCommon from './IndividualCommon';
import Calendar from '../../../../../../assets/images/Calendar.svg';
import HandGesture from '../../../../../../assets/images/HandGesture.svg';
import Target from '../../../../../../assets/images/Target.svg';
import CheckList from '../../../../../../assets/images/CheckList.svg';
import Flash from '../../../../../../assets/images/flash.svg';
import currentDate from '../../../../../../helpers/utility';

const IndividualStats = ({  allShellData, setViewBrain }) => {
    const { masterChest } = allShellData?.data;
    const accuracyCalulationData = masterChest?.chests.map((item) => ({
        totalQue: item?.accuracy?.length,
        correctQue: item?.accuracy?.filter((x) => x > 0)?.length,
        totalsec: item?.answeredInSecs?.reduce((acc, val) => acc + val, 0),

    }));
    const allTotalQue = accuracyCalulationData?.reduce((acc, val) => acc + val?.totalQue, 0);
    const allCorrectAns = accuracyCalulationData?.reduce((acc, val) => acc + val?.correctQue, 0);
    const acurracy = (allCorrectAns
    / allTotalQue) * 100;
    const avgSpeed = accuracyCalulationData?.reduce((acc, val) => acc + val?.totalsec, 0)
    / allTotalQue;

    const handleReview = () => {
        setViewBrain('incorrectAns');
    };

    return (
        <>
            <section className="heavy-details">
                <div className="stats">
                    <IndividualCommon
                        image={Calendar}
                        title="Date"
                        desc={currentDate()}
                    />
                    <IndividualCommon
                        image={HandGesture}
                        title="Total score"
                        desc={`${masterChest?.scoreObtained} points`}
                    />
                    <IndividualCommon
                        image={Target}
                        title="Accuracy"
                        desc={`${acurracy?.toFixed(2)}%`}
                    />
                    <IndividualCommon
                        image={CheckList}
                        title="Right answers"
                        // desc="27 out of 30"
                        desc={`${allCorrectAns} out of ${allTotalQue}`}
                    />
                    <IndividualCommon
                        image={Flash}
                        title="Average speed"
                        desc={`${avgSpeed?.toFixed(2)} sec / question`}
                    />

                </div>

                <button className="review-incorrect-button" type="button" onClick={handleReview}>Review incorrect answers</button>

            </section>
        </>
    );
};
IndividualStats.propTypes = {
    allShellData: object.isRequired,
    setViewBrain: func.isRequired,

};

export default IndividualStats;
