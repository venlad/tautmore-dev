/* eslint-disable no-sequences */
import React from 'react';
import { object } from 'prop-types';
import GivegiftBlock from './GivegiftBlock';
import Buttoncommon from './Button';

function Givegift({ data }) {
    return (
        <div>
            <div className="give-gift-main">
                <div className="row">
                    <div className="col-md-6 gift-left">
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
                    <div className="col-md-6 gift-right">
                        <div>
                            <h4>
                                <span className="span-1" />
                                <span className="span-2" />
                                <span className="span-3" />
                                <span className="span-4" />
                                {data?.heading}
                            </h4>

                            <Buttoncommon content={data?.buttonText} />
                        </div>
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
