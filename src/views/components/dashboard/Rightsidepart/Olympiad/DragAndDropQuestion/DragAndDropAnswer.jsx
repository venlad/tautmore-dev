import React, { useEffect, useState } from 'react';
import {
    array, func, string, number,
} from 'prop-types';
import { connect } from 'react-redux';

const DragAndDropAnswer = ({
    questionInChest, questionType, setSelect,
    // selectedOption,
    selectedQuestion, allQuesAns,

}) => {
    // eslint-disable-next-line prefer-const
    // let dragDefaultOption = questionInChest?.options;
    console.log('allQuesAns', allQuesAns, selectedQuestion);
    const dragDefaultOption = [...questionInChest?.options];
    const [dragData, setDragData] = useState(dragDefaultOption);

    //  console.log(mapAnsOpt, 'mapAnsOpt');
    const [dropData, setDropData] = useState([
        { name: 'name 1', value: '' },
        { name: 'name 2', value: '' },
        { name: 'name 3', value: '' },
        { name: 'name 4', value: '' },
    ]);
    const [dragItem, setDragItem] = useState();
    const [dragSource, setDragSource] = useState();

    useEffect(() => {
        console.log('dropData', dropData);
        let allHasValue = true;
        let solIndex = [];
        dropData.forEach((element) => {
            if (element?.value !== '' && allHasValue) {
                solIndex.push(element?.dragsource);
            } else {
                allHasValue = false;
                solIndex = [-1];
            }
        });
        if (!solIndex?.includes(-1)
        ) {
            setSelect(solIndex);
        }
    }, [dropData]);
    // useEffect(() => {
    //     console.log('selectedOptionsssssss', selectedOption);
    //     if (selectedOption?.length > 1) {
    //         console.log(dropData, 'dropdata');
    //         const mapAnsOpt =  selectedOption?.map((element) => (
    //             {
    //                 name: '',
    //                 value: questionInChest?.options[element],
    //                 dragsource: element,
    //             }));
    //         console.log(mapAnsOpt, 'mapAnsOpt');
    //         setDropData(mapAnsOpt);
    //         setDragData(Array(mapAnsOpt?.length).fill(''));
    //         // setSelect(mapAnsOpt);
    //         // {console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', selectedOption)}
    //     }
    // }, [selectedOption]);

    const handleDragStartTop = (index) => {
        setDragItem(index);
        setDragSource('TopItem');
    };

    const handleDropTop = (e, ind) => {
        if (ind === dropData[dragItem].dragsource) {
            const newList = [...dragData];
            const newitem = dropData[dragItem].value;
            newList.splice(ind, 1);
            newList.splice(ind, 0, newitem);
            setDragData(newList);
            dropData[dragItem].value = '';
        }
    };
    const handleClick = (ind) => {
        const newList = [...dragData];
        const newitem = dropData[ind].value;
        newList.splice(dropData[ind].dragsource, 1, newitem);
        setDragData(newList);
        dropData[ind].value = '';
        delete dropData[ind].dragsource;
    };

    const handleDropBottom = (e, ind) => {
        if (dragSource === 'TopItem') {
            if (dropData[ind].value === '') {
                const newList = [...dropData];
                const newitem = dragData[dragItem];
                newList.splice(ind, 1);
                newList.splice(ind, 0, {
                    name: dropData[ind].name,
                    value: newitem,
                    dragsource: dragItem,
                });

                setDropData(newList);
                dragData[dragItem] = '';
            } else {
                dragData[dropData[ind].dragsource] = dropData[ind].value;
                const newList = [...dropData];
                const newitem = dragData[dragItem];
                newList.splice(ind, 1);
                newList.splice(ind, 0, {
                    name: dropData[ind].name,
                    value: newitem,
                    dragsource: dragItem,
                });
                setDropData(newList);
                dragData[dragItem] = '';
            }
        } else if (dragSource === 'bottomItem') {
            const newList = [...dropData];
            const newitem = dropData[dragItem].value;

            newList.splice(ind, 1);
            newList.splice(ind, 0, {
                name: dropData[ind].name,
                value: newitem,
                dragsource: dropData[dragItem].dragsource,
            });

            newList.splice(dragItem, 1);
            newList.splice(dragItem, 0, {
                name: dropData[dragItem].name,
                value: '',
                dragsource: dragItem,
            });
            setDropData(newList);
            if (dropData[ind].value !== '') {
                dragData[dropData[ind].dragsource] = dropData[ind].value;
            }
        }
    };

    const handleDragStartBottom = (index) => {
        setDragItem(index);
        setDragSource('bottomItem');
    };

    return (
        <div className="drag-and-drop-que-part">

            {questionType !== 'scrambled-and-unscrambled' && (
                <div>
                    <div className="object-container">
                        {dragData?.map((item, i) => (
                            <div
                                className="drag-item"
                                draggable
                                onDragStart={() => handleDragStartTop(i)}
                                onDrop={(e) => handleDropTop(e, i)}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <div className="drag-item-index">
                                    <span>{i + 1}</span>
                                </div>
                                <div className="drag-item-sub">
                                    {item?.text && (
                                        <span className="horizontal-text">{item?.text}</span>
                                    )}
                                    {item?.image && <img src={item?.image} alt="option_image" />}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}
            {questionInChest?.questionOrientaion === 'horizontal' && (
                <div className="preview-table-main">
                    <table className="drag-detail-table horizontal">
                        <thead>
                            <th>Statement</th>
                            {questionInChest?.statement?.length > 0
                && questionInChest?.statement?.map((option, key) => (
                    <td>
                        <div className="horizontal-cell">
                            <span className="opti">
                                {String.fromCharCode(key + 65)}.
                            </span>
                            <div className="hori-text-img">
                                {option?.text && (
                                    <span className="horizontal-text">
                                        {option?.text}
                                    </span>
                                )}
                                {option?.image && (
                                    <img src={option?.image} alt="option_image" />
                                )}
                            </div>
                        </div>
                    </td>
                ))}
                        </thead>
                        <tbody>
                            <tr>
                                <th>Options</th>
                                {questionInChest?.statement?.length > 0
                  && questionInChest?.statement?.map((option, key) => (
                      <td>
                          <div className="horizontal-cell">
                              <span className="opti">{key + 1}. </span>
                          </div>
                      </td>
                  ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {questionInChest?.questionOrientaion === 'vertical' && (
                <table className="drag-detail-table vertical">
                    <thead>
                        <th>Statement</th>
                        <th>Options</th>
                    </thead>
                    <tbody>
                        {questionInChest?.statement?.length > 0
              && questionInChest?.statement?.map((option, key) => (
                  <tr>
                      <td className="left-part">
                          <div className="vertical-cell">
                              <span className="opti">
                                  {String.fromCharCode(key + 65)}.
                              </span>
                              {option?.text && (
                                  <span className="vertical-text">{option?.text}</span>
                              )}
                              {option?.image && (
                                  <img src={option?.image} alt="option_image" />
                              )}
                          </div>
                      </td>
                      <td className="right-part">
                          <div className="vertical-cell">
                              <span className="opti">{key + 1}. </span>
                              <span
                                  className="right-part-val"
                                  onDrop={(e) => handleDropBottom(e, key)}
                                  onDragOver={(e) => e.preventDefault()}
                              >
                                  <span className="right-part-val-common">
                                      {dropData[key].value !== '' && dropData[key].value.image !== ''
                                    && (
                                        <img
                                            draggable
                                            onDragStart={() => handleDragStartBottom(key)}
                                            onDoubleClick={() => handleClick(key)}
                                            src={dropData[key].value.image}
                                            alt="option_image"
                                        />
                                    )}

                                      {dropData[key].value !== '' && dropData[key].value.text !== ''
                                    && (
                                        <div>{dropData[key].value.text}</div>
                                    )}
                                  </span>
                              </span>
                          </div>
                      </td>
                  </tr>
              ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

DragAndDropAnswer.propTypes = {
    questionInChest: array.isRequired,
    questionType: string.isRequired,
    setSelect: func.isRequired,
    // selectedOption: array.isRequired,
    selectedQuestion: number.isRequired,
    allQuesAns: array.isRequired,
};
const mapStateToProps = (state) => ({
    allQuesAns: state.MyExam.allQuesAns,
});
export default connect(mapStateToProps)(DragAndDropAnswer);
