import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import { rightpart } from '../mockData/Myanswerdata';
import right from '../../../../assets/images/right.png';
import minus from '../../../../assets/images/minus.png';
import plus from '../../../../assets/images/plus.png';

const MyexamanswerRightpart = () => {
    const [toggle, setToggle] = useState('');

    const handleClick = (val) => {
        if (toggle === val) {
            setToggle('');
        } else {
            setToggle(val);
        }
    };

    return (
        <div className="myexam-answer-right">

            {rightpart.map((data) => (
                <div key={data.title}>
                    <h3>{data.title}</h3>
                    {data?.que.map((value, ind) => (
                        <div key={value} className="row exam-right-common">
                            <div className="col-md-1 col-sm-1 col-12 exam-right-left">
                                <img src={right} alt="true" />
                            </div>
                            <div className="col-md-10 col-sm-10 col-10 exam-right-center">

                                <h5><span className="index">{ind + 1}. </span>{value}</h5>

                                <h5 className="answer">Answer : <span /></h5>
                                <Fade in={ind === toggle}>
                                    <div id="example-fade-text" className="option-main" />
                                </Fade>
                            </div>
                            <div className="col-md-1 col-sm-1 col-2 exam-right-right">
                                <button
                                    type="button"
                                    onClick={() => handleClick(ind)}
                                    aria-controls="example-fade-text"
                                    // aria-expanded={open}
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
            ))}

        </div>
    );
};

export default MyexamanswerRightpart;
