/* eslint-disable react/no-danger */
/* eslint-disable no-sequences */
import React from 'react';
import { object } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import GivegiftBlock from '../home/GivegiftBlock';
import Buttoncommon from '../home/Button';

function Givegift({ data }) {
    return (
        <div className="bg2">
            <div className="give-gift-main">
                <div className="row">
                    <div className="col-md-6 gift-right-abt">

                        <div>
                            <h2>
                                {data?.heading}
                            </h2>
                            <ReactMarkdown>{data?.description }</ReactMarkdown>

                            <Buttoncommon content={data?.buttonText} />
                        </div>

                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center gift-left">
                        {
                            data?.listItems?.map((item, i) => (
                                <>
                                    <GivegiftBlock
                                        icon={i + 1}
                                        content={item?.text}
                                        className={'gift-common-'.concat(i + 1)}
                                    />
                                    {i < 2 && (<div className={i === 0 ? 'border-common' : 'border-common border-common-2'}><span /></div>)}
                                </>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
Givegift.propTypes = {
    data: object,
};

Givegift.defaultProps = {
    data: {},
};
export default Givegift;
