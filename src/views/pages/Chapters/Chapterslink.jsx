import React from 'react';
import { array, string, func } from 'prop-types';
import { useDispatch } from 'react-redux';
import selectFooterLinkAction from '../../../stores/Grades/GradesAction';

const Chapterslink = ({ grades, setSelectGrade, selectGrade }) => {
    const dispatch = useDispatch();
    return (
        <div className="chapters-links">
            <h1 id="top">Grade</h1>
            <ul className="links-list">
                {grades?.map((grade) => (
                    <li key={grade?.id} className={grade?.attributes?.slug === selectGrade ? 'active' : ''}>
                        <button
                            type="button"
                            onClick={
                                () => {
                                    setSelectGrade(grade?.attributes?.title);
                                    dispatch(selectFooterLinkAction(grade?.attributes?.slug));
                                }
                            }
                            className={grade?.attributes?.slug === selectGrade ? 'active' : ''}
                        >
                            {grade?.attributes?.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Chapterslink.propTypes = {
    grades: array,
    setSelectGrade: func,
    selectGrade: string,
};

Chapterslink.defaultProps = {
    grades: [],
    setSelectGrade: () => {},
    selectGrade: '',
};

export default Chapterslink;
