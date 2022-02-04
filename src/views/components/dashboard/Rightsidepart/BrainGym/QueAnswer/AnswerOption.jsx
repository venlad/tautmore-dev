import React, { useEffect, useState } from 'react';
import { array, func, string } from 'prop-types';
import { renderText } from './textHelper';
import { findKeyByValue, checkDragDropSnunscramble, structureDragAndDrop } from './questionHelper';
import { checkIcon } from '../../../../../../assets/icons/IconList';

const AnswerOption = ({
    questionInChest, item, ind, setSelect, select,
}) => {
    const [dragData, setDragData] = useState([]);

    useEffect(() => {
        if (checkDragDropSnunscramble(findKeyByValue(questionInChest?.solutionType))) {
            setDragData(
                structureDragAndDrop(
                    questionInChest?.statement,
                    questionInChest?.options,
                    questionInChest?.solutionIndex,
                ),
            );
        }
    }, [questionInChest]);

    const selectAns = (id) => {
        setSelect(id);
    };

    const questionType = findKeyByValue(questionInChest?.solutionType);

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
                    className={`option-wrapper-tile-type d-flex align-items-center justify-content-between p-4 ${ind === select ? 'true' : ''}`}
                >
                    <button type="button" onClick={() => selectAns(ind)}>
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
                        <div className="icon--check-wrapper d-flex align-items-center justify-content-center">
                            {checkIcon}
                        </div>
                    </button>
                </div>
            );
    }
    return renderAnswer;
};

AnswerOption.propTypes = {
    questionInChest: array.isRequired,
    item: array.isRequired,
    ind: array.isRequired,
    setSelect: func.isRequired,
    select: string.isRequired,
};

export default AnswerOption;
