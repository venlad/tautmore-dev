import React from 'react';
import { func, object } from 'prop-types';
import Close from '../../../../../../assets/images/Close-shell.svg';
import IndividualStats from './IndividualStats';
import ShellTitleStats from './ShellTitleStats';
import BlueTick from '../../../../../../assets/images/NounTick.svg';
import './report.scss';
import currentDate from '../../../../../../helpers/utility';

const Report = ({ allShellData, setViewBrain }) => {
    const { chests } = allShellData?.data?.masterChest;
    const closePopup = () => {
        setViewBrain('home');
    };
    return (
        <div className="report-main">
            <div className="report-container">

                <section className="subject-name">
                    <h2>Mathematics report ({currentDate()})</h2>
                    <button type="button" className="close-btn" onClick={closePopup}><img src={Close} alt="No Imag" /></button>
                </section>

                <section className="banner">
                    <img src={BlueTick} alt="No Imag" />
                    <p>Nice Work! You will sonn be a master at this topic! Keep it up!</p>
                </section>

                <IndividualStats
                    allShellData={allShellData}
                    setViewBrain={setViewBrain}
                />

                <section className="shell-title-and-stats">
                    {chests.map((item) => (
                        <ShellTitleStats
                            shell_num={item?.chestIndex}
                            points={item?.scoreObtained}
                            title={item?.subConcept}
                            level={item?.chestLevel}
                            correct={`${item?.accuracy?.filter((x) => x > 0)?.length}/${item?.accuracy?.length}`}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};
Report.propTypes = {
    allShellData: object.isRequired,
    setViewBrain: func.isRequired,
};

export default Report;
