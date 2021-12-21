import React from 'react';
import Close from '../../../../../../assets/images/Close-shell.svg';
import IndividualStats from './IndividualStats';
import ShellTitleStats from './ShellTitleStats';
import BlueTick from '../../../../../../assets/images/NounTick.svg';
import './report.scss';

const Report = () => (
    <div className="report-main">
        <div className="report-container">

            <section className="subject-name">
                <h2>Mathematics report (16 Aug)</h2>
                <button type="button" className="close-btn"><img src={Close} alt="No Imag" /></button>
            </section>

            <section className="banner">
                <img src={BlueTick} alt="No Imag" />
                <p>Nice Work! You will sonn be a master at this topic! Keep it up!</p>
            </section>

            <IndividualStats />

            <section className="shell-title-and-stats">

                <ShellTitleStats
                    shell_num="1"
                    points="15"
                    title="Odd me out"
                    level="1"
                    correct="14/20"
                />

                <ShellTitleStats
                    shell_num="2"
                    points="15"
                    title="Count to 10"
                    level="1"
                    correct="14/20"
                />

                <ShellTitleStats
                    shell_num="3"
                    points="15"
                    title="Number contraction..."
                    level="2"
                    correct="14/20"
                />

                <ShellTitleStats
                    shell_num="4"
                    points="15"
                    title="Subtraction by 2"
                    level="2"
                    correct="14/20"
                />

                <ShellTitleStats
                    shell_num="5"
                    points="15"
                    title="Subtraction by 10"
                    level="2"
                    correct="14/20"
                />
            </section>
        </div>
    </div>
);

export default Report;
