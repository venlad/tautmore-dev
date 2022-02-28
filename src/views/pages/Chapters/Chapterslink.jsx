import React from 'react';
import PropTypes from 'prop-types';

const Chapterslink = ({ grades, setSelectGrade, selectGrade }) => (
    <div className="chapters-links">
        <h1>Grade</h1>
        <ul className="links-list">
            {grades.map((grade) => (
                <li key={grade?.id} className={grade?.attributes?.title === selectGrade ? 'active' : ''}>
                    <button
                        type="button"
                        onClick={() => setSelectGrade(grade?.attributes?.title)}
                        className={grade?.attributes?.title === selectGrade ? 'active' : ''}
                    >
                        {grade?.attributes?.title}
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

Chapterslink.propTypes = {
    grades: PropTypes.array.isRequired,
    setSelectGrade: PropTypes.isRequired,
    selectGrade: PropTypes.isRequired,
};

export default Chapterslink;
