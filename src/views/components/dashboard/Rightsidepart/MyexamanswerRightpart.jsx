import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { object } from 'prop-types';
// import { rightpart } from '../mockData/Myanswerdata';
import right from '../../../../assets/images/right.png';
import wrong from '../../../../assets/images/wrong.png';
import minus from '../../../../assets/images/minus.png';
import plus from '../../../../assets/images/plus.png';
import { renderText } from './BrainGym/QueAnswer/textHelper';
import MyExamReportOptions from './MyExamReportOptions';

const MyexamanswerRightpart = ({ myReportData }) => {
    const [toggle, setToggle] = useState('');
    const [open, setOpen] = useState(false);

    const handleClick = (val) => {
        setOpen(!open);
        if (toggle === val) {
            setToggle('');
        } else {
            setToggle(val);
        }
    };
    const { data } = myReportData;
    const checkCorrectOrNot = (id, solutionIndex) => {
        const result = data?.result?.find((obj) => obj.question === id)
            ?.solutionIndex;
        const is_same = (result?.length === solutionIndex.length)
         && result?.every((element, index) => element === solutionIndex[index]);
        return is_same;
    };
    return (
        <div className="myexam-answer-right">
            <div>
                <h3>Check your answers and evaluate yourself</h3>
                {/* {data?.que.map((value, ind) => ( */}
                {data?.questionDetails?.map((item, ind) => (
                    <div key={item?._id} className="row exam-right-common">
                        <div className="col-md-1 col-sm-1 col-12 exam-right-left">
                            <img src={checkCorrectOrNot(item?._id, item?.solutionIndex) ? right : wrong} alt="true" />
                        </div>
                        <div className="col-md-10 col-sm-10 col-10 exam-right-center">

                            <div className="question"><span className="index">{ind + 1}.</span><h5>{renderText(item?.description)}</h5></div>

                            <h5 className={checkCorrectOrNot(item?._id, item?.solutionIndex) ? 'answerRight' : 'answerWrong'}>Answer :
                                <span className={item?.options[item?.solutionIndex]?.image ? 'image' : 'text'}>
                                    {renderText(item?.options[item?.solutionIndex]?.text)}
                                    {item?.options[item?.solutionIndex]?.image && <img src={item?.options[item?.solutionIndex]?.image} alt="true" />}
                                </span>
                            </h5>
                            <Collapse in={ind === toggle}>
                                <div id="example-collapse-text" className="option-main">
                                    {console.log('item', item)}
                                    <div className={'question-options-wrapper '.concat(item?.questionOrientaion)}>
                                        {item?.options?.map((ele, i) => ((ele?.text !== '' || ele?.image !== '')
                                        && (
                                            <MyExamReportOptions
                                                questionObject={data?.questionDetails
                                            && data?.questionDetails}
                                                item={ele}
                                                selectedOption={item?.solutionIndex}
                                                // setSelectedOption={setSelectedOption}
                                                ind={i}
                                            />
                                        )
                                        ))}
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                        <div className="col-md-1 col-sm-1 col-2 exam-right-right">
                            <button
                                type="button"
                                onClick={() => handleClick(ind)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                {
                                    ind === toggle ? <img src={minus} alt="minus" />

                                        : <img src={plus} alt="plus" />
                                }

                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* ))} */}

        </div>
    );
};
MyexamanswerRightpart.propTypes = {
    myReportData: object.isRequired,
};
export default MyexamanswerRightpart;
