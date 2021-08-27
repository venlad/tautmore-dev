import React from 'react';
import { bool } from 'prop-types';
import  notification  from '../mockData/notificationmenudata';

const Notificationmenu = ({ className }) => (
    <div className={`notification-menu ${className}`}>
        {notification.map((data) => (
            <div key={data.title}>
                <h4>{data.title}</h4>
                {data?.data.map((note) => (
                    <div className="row" key={note.title}>
                        <div className="col-sm-2 col-12">
                            <div className="icon" style={{ backgroundColor: note.color }}>
                                {note.image}
                            </div>
                        </div>
                        <div className="col-sm-7 col-12">
                            <h5>{note.title}</h5>
                            <p>{note.desc}</p>
                        </div>
                        <div className="col-sm-3 col-12 notification-menu-right">
                            <span>{note.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

Notificationmenu.propTypes = {
    className: bool.isRequired,

};

export default Notificationmenu;
