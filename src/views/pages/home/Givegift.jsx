import React from 'react';
import GivegiftBlock from './GivegiftBlock';
import Buttoncommon from './Button';

function Givegift() {
    return (
        <div>
            <div className="give-gift-main">
                <div className="row">
                    <div className="col-md-6 gift-left">
                        <GivegiftBlock
                            icon="1"
                            content="Enrol your child"
                            className="gift-common-1"
                        />
                        <span className="border-common" />
                        <GivegiftBlock
                            icon="2"
                            content="Select one of our programs"
                            className="gift-common-2"
                        />

                        <span className="border-common border-common-2" />
                        <GivegiftBlock
                            icon="3"
                            content="Lorem ipsum dolar sit"
                            className="gift-common-3"
                        />
                    </div>
                    <div className="col-md-6 gift-right">
                        <h4>
                            <span className="span-1">Give</span> the gift
                            <span className="span-2"> of</span>
                            <span className="span-3"> better</span>
                            <br />
                            learning in just 3
                            <br />
                            easy <span className="span-4">steps</span>.
                        </h4>

                        <Buttoncommon content="Subscribe now" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Givegift;
