/* eslint-disable no-sequences */
import React from 'react';
import { object } from 'prop-types';
import GivegiftBlock from '../home/GivegiftBlock';
import Buttoncommon from '../home/Button';

function Givegift({ data }) {
    return (
        <div className="bg2">
            <div className="give-gift-main">
                <div className="row">
                    <div className="col-md-6 gift-right">

                        <div>
                            <h2>
                                How TautMore Works?
                            </h2>
                            <p style={{ fontWeight: 'lighter' }}>It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal.
                            </p>
                            <p>Distribution of letters, as opposed to using Content here,
                                content here, making it look like readable English. Many
                                desktop publishing packages and web page editors now use Lorem Ipsum
                                as their default model text,
                            </p>
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
