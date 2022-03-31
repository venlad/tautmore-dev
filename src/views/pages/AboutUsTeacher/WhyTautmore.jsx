/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import { string } from 'prop-types';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { array } from 'yup';
import Buttoncommon from '../home/Button';

const WhyTautmore = ({ cardData, btnText, title }) => {
    const [view, setView] = useState(null);

    const viewMore = (index) => {
        if (index !== view) {
            setView(index);
        } else {
            setView(null);
        }
    };
    return (
        <div className="why-wrap">
            <h1>{title}</h1>
            <div className="why-points-wrapper">
                <span className="sw-ab-1" />
                <span className="sw-ab-2" />
                <span className="sw-ab-3" />
                <div className="row">
                    {
                        cardData?.map((item) => (
                            <div className="col-12 col-md-6" key={item?.id}>
                                <div className="why-card">
                                    <h2>{item?.heading}</h2>
                                    <ReactMarkdown>{item?.description}</ReactMarkdown>
                                    {
                                        (
                                            view === item?.id
                                                ? item?.listItems
                                                : item?.listItems?.slice(0, 2)
                                        )?.map((sub) => (
                                            <div className="d-flex align-items-center">
                                                <div className="size-sm" />
                                                <small key={sub?.id}>
                                                    {sub?.text}
                                                </small>
                                                <br />
                                            </div>
                                        ))
                                    }
                                    {
                                        item?.listItems.length > 2 && (
                                            <h5 className="viewmore-li" onClick={() => viewMore(item?.id)}>view {view === item?.id ? 'less' : ' more'}</h5>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-12 d-flex justify-content-center">
                        <Buttoncommon content={btnText} />
                    </div>
                </div>
            </div>
        </div>
    );
};
WhyTautmore.propTypes = {
    cardData: array,
    btnText: string,
    title: string,
};

WhyTautmore.defaultProps = {
    cardData: [],
    btnText: '',
    title: '',
};
export default WhyTautmore;
