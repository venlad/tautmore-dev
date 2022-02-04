import React from 'react';
// import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';
import Head from './Head';
import '../../../../../pages/Brain-gym/style/braingym.scss';
import './style.scss';
import QueAns from './QueAns';
import Time from './Time';

const index = ({
    // questionInChest,
    chestId,
    setViewBrain,
    select,
    setSelect,
    currenttime,
    setEachTimeOn,
    eachcurrenttime,
}) => {
    const questionInChest = [
        {
            _id: '61f92f0a2c3c1200093f4d99',
            title: null,
            solutionIndex: [
                0,
                1,
                2,
                3,
            ],
            fillInTheBlankSolution: '',
            solutionDescription: '<p>Testt</p>',
            solutionDescriptionImage: '',
            difficulty: 'low_1.1',
            difficultyLevel: 'low_1.1',
            timeToSolve: 30,
            active: true,
            isDeleted: false,
            adminIsActive: true,
            classIds: [
                '61cae39084278500096fdca9',
            ],
            uploadedDate: '2022-02-01T13:00:58.636Z',
            restrictedDate: '2022-02-02T13:00:58.636Z',
            status: 'IN-REVIEW',
            reviewedBy: null,
            reviewedDate: null,
            id: 7123416,
            description: '<p>Tsetttt</p>',
            moduleType: 'brain-gym',
            statement: [
                {
                    index: 0,
                    text: 'aaaa',
                    image: '',
                    _id: '61f92f0a2c3c1200093f4d9a',
                },
                {
                    index: 1,
                    text: 'bbbbb',
                    image: '',
                    _id: '61f92f0a2c3c1200093f4d9b',
                },
                {
                    index: 2,
                    text: 'ccc',
                    image: '',
                    _id: '61f92f0a2c3c1200093f4d9c',
                },
                {
                    index: 3,
                    text: 'dddd',
                    image: '',
                    _id: '61f92f0a2c3c1200093f4d9d',
                },
            ],
            options: [
                {
                    index: null,
                    text: '',
                    image: 'https://tm-admin-images.s3.amazonaws.com/images/1643720405190-image43.png',
                    _id: '61f92f0a2c3c1200093f4d9e',
                },
                {
                    index: null,
                    text: '',
                    image: 'https://tm-admin-images.s3.amazonaws.com/images/1643720412190-image34.png',
                    _id: '61f92f0a2c3c1200093f4d9f',
                },
                {
                    index: null,
                    text: '',
                    image: 'https://tm-admin-images.s3.amazonaws.com/images/1643720418741-image53.png',
                    _id: '61f92f0a2c3c1200093f4da0',
                },
                {
                    index: null,
                    text: '',
                    image: 'https://tm-admin-images.s3.amazonaws.com/images/1643720425233-image41.png',
                    _id: '61f92f0a2c3c1200093f4da1',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '3',
            passageQuestions: [],
            score: 10,
            subjectName: 'Mathematics',
            syllabusMapping: [
                {
                    _id: '61cc0cfa73d0681f81d10a0b',
                    subject: '61cae44784278500096fdcaf',
                    class: {
                        _id: '61cae39084278500096fdca9',
                        name: 'III',
                    },
                    board: {
                        _id: '61c33124b6b2aa0009e0ddcf',
                        name: 'global integrated curriculam',
                    },
                    chapter: {
                        _id: '61cc0cf173d0681f81d109f4',
                        name: 'Number System',
                    },
                    concept: {
                        _id: '61cc0cf273d0681f81d109ff',
                        name: 'Numbers upto 4-digits',
                    },
                },
            ],
            subConcept: {
                _id: '61cc0ca06cdfe11016fbf191',
                name: 'Sketch the Number',
            },
            uploadedBy: {
                _id: '61c32f26b6b2aa0009e0ddcc',
                name: 'super-admin1',
            },
            reviewHistory: [],
            updatedAt: '2022-02-01T13:00:58.641Z',
            createdAt: '2022-02-01T13:00:58.641Z',
            __v: 0,
        },
    ];
    return (
        <div className="brain-que-ans-main">
            <div className="brain-gym-main braingym-page">
                <Head />
                <div className="brain-gym-bottom">
                    <Time totalTime={currenttime} />
                    {questionInChest?.map((data) => (
                        <QueAns
                            data={data}
                            setEachTimeOn={setEachTimeOn}
                            eachcurrenttime={eachcurrenttime}
                            select={select}
                            setSelect={setSelect}
                            chestId={chestId}
                            setViewBrain={setViewBrain}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
index.propTypes = {
    questionInChest: array.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
    select: string.isRequired,
    setSelect: func.isRequired,
    currenttime: string.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
};

// const mapStateToProps = (state) => ({
//     questionInChest: state.BrainGym.questionInChest,
// });

// export default connect(mapStateToProps, null)(index);
export default index;
