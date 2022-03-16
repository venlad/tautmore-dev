import React, { useEffect, useState } from 'react';
import { array, func, string } from 'prop-types';
import { renderText } from './BrainGym/QueAnswer/textHelper';
// import { findKeyByValue, checkDragDropSnunscramble, structureDragAndDrop }
// from '../BrainGym/QueAnswer/questionHelper';
import { findKeyByValue } from './BrainGym/QueAnswer/questionHelper';
import { checkIcon } from '../../../../assets/icons/IconList';

const MyExamReportOptions = ({
    questionObject, item, ind, selectedOption,
}) => {
    const [dragData, setDragData] = useState([]);
    // console.log('item', item, ind);
    useEffect(() => {
        setDragData();
    //     if (checkDragDropSnunscramble(findKeyByValue(questionInChest?.solutionType))) {
    //         setDragData(
    //             structureDragAndDrop(
    //                 questionInChest?.statement,
    //                 questionInChest?.options,
    //                 questionInChest?.solutionIndex,
    //             ),
    //         );
    //     }
    }, [questionObject]);

    // const selectAns = (id) => {
    //     setSelectedOption([id]);
    // };

    const questionType = findKeyByValue(questionObject?.solutionType);

    let renderAnswer = null;
    switch (questionType) {
        case 'drag-and-drop':
            renderAnswer = (
                <table className="drag-detail-table">
                    <thead>
                        <th colSpan="2">Statement</th>
                        <th colSpan="2">Options</th>
                    </thead>
                    <tbody>
                        {dragData?.length > 0
              && dragData?.map((option) => (
                  <tr>
                      <td>
                          {option?.image ? (<img src={option?.image} alt="option_image" />
                          ) : (
                              <span>No Image</span>
                          )}
                      </td>
                      <td>
                          {option?.text ? (
                              <span>{option?.text}</span>
                          ) : (
                              <span>No text</span>
                          )}
                      </td>
                      <td>
                          {option?.statementImage ? (<img src={option?.statementImage} alt="option_image" />
                          ) : (
                              <span>No Image</span>
                          )}
                      </td>
                      <td>
                          {option?.statementText ? (
                              <span>{option?.statementText}</span>
                          ) : (
                              <span>No text</span>
                          )}
                      </td>
                  </tr>
              ))}
                    </tbody>
                </table>
            );
            break;
        default:
            renderAnswer = (
                <div
                    className={`option-wrapper-tile-type d-flex align-items-center
                 justify-content-between p-4
                     ${selectedOption?.includes(ind) ? 'true' : ''}
                    `}
                >
                    {/* {console.log('selectedOption', selectedOption)} */}
                    <div className="optionsbtn d-flex align-items-center
                justify-content-between"
                    >
                        {String.fromCharCode(ind + 65)} <span className="opti"> . </span>
                        {item?.image && (
                            <div className="questionHtlm-left">
                                <img src={item?.image} alt="option_image" />
                            </div>
                        )}
                        {item?.text !== '' && (
                            <div className="questionHtlm-right">
                                <span>{renderText(item?.text)}</span>
                            </div>
                        )}
                        <div className="icon--check-wrapper d-flex align-items-center
                 justify-content-center"
                        >
                            {checkIcon}
                        </div>
                    </div>
                </div>

            );
    }
    return renderAnswer;
};

MyExamReportOptions.propTypes = {
    // questionInChest: array.isRequired,
    item: array.isRequired,
    ind: array.isRequired,
    selectedOption: string.isRequired,
    setSelectedOption: func.isRequired,
};

export default MyExamReportOptions;
