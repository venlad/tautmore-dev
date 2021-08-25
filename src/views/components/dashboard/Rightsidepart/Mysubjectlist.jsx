import React, { useState } from 'react';
import {  func } from 'prop-types';
import Mysubjectlisttop from './Mysubjectlisttop';
import Mysubjectcounttop from './Mysubjectcounttop';
import Mysubjectcount from './Mysubjectcount';
import MysubUpcomingclass from './MysubUpcomingclass';

const Mysubjectlist = ({ setConcept }) => {
    const [show, setShow] = useState(true);
    const [hide, setHide] = useState(false);
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <Mysubjectlisttop />
                </div>
                <div className="col-md-4" />
            </div>
            <div className="row">
                <div className="col-md-8 mysubject-count-left">

                    <Mysubjectcounttop />
                    <Mysubjectcount
                        show={show}
                        setShow={setShow}
                        hide={hide}
                        setHide={setHide}
                    />
                </div>
                <div className="col-md-4 mysubject-count-right">
                    <MysubUpcomingclass
                        show={show}
                        setShow={setShow}
                        hide={hide}
                        setHide={setHide}
                        setConcept={setConcept}
                    />
                </div>
            </div>
        </div>
    );
};

Mysubjectlist.propTypes = {
    setConcept: func.isRequired,
};

export default Mysubjectlist;
