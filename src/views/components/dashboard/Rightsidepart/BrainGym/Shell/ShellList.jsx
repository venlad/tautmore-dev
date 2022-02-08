import React from 'react';
import { connect } from 'react-redux';
import { func, object, array } from 'prop-types';
import OysterOpen from '../../../../../../assets/images/OysterOpen.svg';
import OysterClosed from '../../../../../../assets/images/OysterClosed.svg';
import { startChestAction } from '../../../../../../stores/BrainGym/BrainGymAction';

const ShellList = ({ setShowShell, currentChest, chests }) => {
    const startNow = () => {
        setShowShell(true);
    };

    console.log(chests, currentChest, 'chest');

    const isCurrentChest = (id) => currentChest?._id === id;
    return (
        <div className="shells-and-dashed-borders">
            <div className="flex-items">
                {chests?.length > 0 && chests?.map((chest) => (
                    <div className="Oyster-and-title">
                        {isCurrentChest(chest?._id)
                            ? <img id="icon-large" className="adjusted-image1" src={OysterOpen} alt="No Imag" />
                            : <img id="icon-large" src={OysterClosed} alt="No Imag" />}
                        <p className="adjusted-para1">SHELL {chest?.chestIndex}</p>
                        {isCurrentChest(chest?._id) && <p className="start-now1 adjusted" aria-hidden="true" onClick={startNow}>Start now</p>}
                    </div>
                ))}

                {/* <div className="Oyster-and-title">
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
                    <img id="icon-large" className="adjusted-image2"
                     src={OysterClosed} alt="No Imag" />
                    <p className="adjusted-para2">SHELL 5</p>
                </div> */}
            </div>
        </div>
    );
};
ShellList.propTypes = {
    chests: array.isRequired,
    setShowShell: func.isRequired,
    currentChest: object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    startChest: (data) => dispatch(startChestAction(data)),
});

export default connect(null, mapDispatchToProps)(ShellList);
