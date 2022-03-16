import { func, string } from 'prop-types';
import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter,
} from 'react-bootstrap';

const FinishExamPopup = ({
    setFinishTest, modal, setModal,
}) => {
    // console.log('modal', modal);
    const FinishExam = () => {
        setFinishTest('step3');
    };
    return (
        <div>
            <Modal
                show={modal}
                style={{ zIndex: 9999 }}
                className="delete-popup"
            >
                <ModalBody>Are you sure you want to Finish Exam?</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={FinishExam}>
                        Yes
                    </Button>
                    <Button color="secondary" onClick={() => setModal(!modal)}>
                        {/* <Button color="secondary"> */}
                        No
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
FinishExamPopup.propTypes = {
    setFinishTest: func.isRequired,
    setModal: func.isRequired,
    modal: string.isRequired,
};

export default FinishExamPopup;
