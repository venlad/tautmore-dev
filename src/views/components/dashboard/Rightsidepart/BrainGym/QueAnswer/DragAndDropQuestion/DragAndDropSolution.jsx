import React from 'react';
import { array } from 'prop-types';
import { structureDragAndDrop } from '../questionHelper';

const DragAndDropSolution = ({ questionInChest }) => {
    const dragData = structureDragAndDrop(
        questionInChest?.statement,
        questionInChest?.options,
        questionInChest?.solutionIndex,
    );
    return (
        <div className="drag-and-drop-que-part">
            <div className="object-container">
                <h3>Solution</h3>
            </div>
            {questionInChest?.questionOrientaion === 'horizontal' && (
                <div className="preview-table-main">
                    <table className="drag-detail-table horizontal">
                        <thead>
                            <th>Statement</th>
                            {dragData?.length > 0
                && dragData?.map((item, key) => (
                    <td>
                        <div className="horizontal-cell">
                            <span className="opti">
                                {String.fromCharCode(key + 65)}.
                            </span>
                            <div className="hori-text-img">
                                {item?.text && (
                                    <span className="horizontal-text">
                                        {item?.text}
                                    </span>
                                )}
                                {item?.image && (
                                    <img src={item?.image} alt="option_image" />
                                )}
                            </div>
                        </div>
                    </td>
                ))}
                        </thead>
                        <tbody>
                            <tr>
                                <th>Options</th>
                                {dragData?.length > 0
                  && dragData?.map((item, key) => (
                      <td>
                          <div className="horizontal-cell">
                              <span className="opti">{key + 1}. </span>
                              <div className="hori-text-img">
                                  {item?.statementText && (
                                      <span className="horizontal-text">
                                          {item?.statementText}
                                      </span>
                                  )}
                                  {item?.statementImage && (
                                      <img
                                          src={item?.statementImage}
                                          alt="option_image"
                                      />
                                  )}
                              </div>
                          </div>
                      </td>
                  ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {questionInChest?.questionOrientaion === 'vertical' && (
                <div>
                    <table className="drag-detail-table vertical">
                        <thead>
                            <th>Statement</th>
                            <th>Options</th>
                        </thead>
                        <tbody>
                            {dragData?.length > 0
              && dragData?.map((item, key) => (
                  <tr>
                      <td className="left-part">
                          <div className="vertical-cell">
                              <span className="opti">
                                  {String.fromCharCode(key + 65)}.
                              </span>
                              {item && (
                                  <span className="vertical-text">{item?.text}</span>
                              )}
                              {item?.image  && (
                                  <img src={item?.image} alt="option_image" />
                              )}
                          </div>
                      </td>
                      <td className="right-part">
                          <div className="vertical-cell">
                              <span className="opti">{key + 1} . </span>
                              {item?.statementText && (
                                  <span className="vertical-cell vertical-text">
                                      {item?.statementText}
                                  </span>
                              )}
                              {item?.statementImage && (
                                  <img
                                      src={item?.statementImage}
                                      alt="option_image"
                                  />
                              )}
                          </div>
                      </td>
                  </tr>
              ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

DragAndDropSolution.propTypes = {
    questionInChest: array.isRequired,
};

export default DragAndDropSolution;
