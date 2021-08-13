import React, { forwardRef } from 'react';
import { string, bool } from 'prop-types';
import aeroplane from '../../../assets/images/travelling.png';

const SubtopicDesc = forwardRef(({ isShow, shouldToggleStyle, index }, ref) => (
    isShow && (
        <div
            className={`subtopic-desc ${
                !shouldToggleStyle ? 'toggle' : 'no-toggle'
            }`}
            ref={ref}
            id={index}
        >
            <button type="button"><h1>How many planes can you spot flying here?</h1>
                <div className="desc-img-cont">
                    {[1, 2, 3, 4, 5, 6, 7].map((imgKey) => (
                        <div className="img-cont" key={imgKey}>
                            <img src={aeroplane} alt="aeroplane_img" />
                        </div>
                    ))}
                </div>
            </button>
        </div>
    )
));
SubtopicDesc.propTypes = {
    isShow: bool.isRequired,
    shouldToggleStyle: bool.isRequired,
    index: string.isRequired,

};
export default SubtopicDesc;
