import React from 'react';
import OysterOpen from '../../../../../../assets/images/OysterOpen.svg';
import OysterClosed from '../../../../../../assets/images/OysterClosed.svg';

const ShellList = () => (
    <div className="shells-and-dashed-borders">
        <div className="flex-items">
            <div className="Oyster-and-title">
                <img id="icon-large" className="adjusted-image1" src={OysterOpen} alt="No Imag" />
                <p className="adjusted-para1">SHELL 1</p>
                <p className="start-now1 adjusted">Start now</p>
            </div>
            <div className="Oyster-and-title">
                <img id="icon-large" src={OysterClosed} alt="No Imag" />
                <p>SHELL 2</p>
            </div>
            <div className="Oyster-and-title">
                <img id="icon-large" src={OysterClosed} alt="No Imag" />
                <p>SHELL 3</p>
            </div>
            <div className="Oyster-and-title">
                <img id="icon-large" src={OysterClosed} alt="No Imag" />
                <p>SHELL 4</p>
            </div>
            <div className="Oyster-and-title">
                <img id="icon-large" className="adjusted-image2" src={OysterClosed} alt="No Imag" />
                <p className="adjusted-para2">SHELL 5</p>

            </div>
        </div>
    </div>
);

export default ShellList;
