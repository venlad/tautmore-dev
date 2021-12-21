import React from 'react';
import { string } from 'prop-types';
import Oyster from '../../../../../../assets/images/OysterOpen.svg';
import Pen from '../../../../../../assets/images/pencil.svg';

const ShellTitleStats = ({
    shell_num, points, title, level, correct,
}) => (
    <>

        <div className="title-individual">

            <div className="shell-number">
                <img src={Oyster} alt="No Imag" />
                <p>Shell {shell_num}</p>
            </div>

            <div className="flex-items-points">
                <img src={Pen} alt="No Imag" />
                <p className="points">{points} points</p>
            </div>

            <p className="shell-title">{title}</p>

            <div className="level-and-correct-count">
                <p className="green-level-label green-background">Level {level}</p>
                <p className="correct-count "> <span className="mid-border"> | </span> {correct} correct</p>
            </div>
        </div>

    </>
);

ShellTitleStats.propTypes = {
    shell_num: string.isRequired,
    points: string.isRequired,
    title: string.isRequired,
    level: string.isRequired,
    correct: string.isRequired,
};

export default ShellTitleStats;
