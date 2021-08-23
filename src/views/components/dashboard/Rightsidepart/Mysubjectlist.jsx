import React from 'react';
import Mysubjectlisttop from './Mysubjectlisttop';
import Mysubjectcounttop from './Mysubjectcounttop';
import Mysubjectcount from './Mysubjectcount';
import MysubUpcomingclass from './MysubUpcomingclass';

const Mysubjectlist = () => (
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
                <Mysubjectcount />
            </div>
            <div className="col-md-4 mysubject-count-right">
                <MysubUpcomingclass />
            </div>
        </div>
    </div>
);

export default Mysubjectlist;
