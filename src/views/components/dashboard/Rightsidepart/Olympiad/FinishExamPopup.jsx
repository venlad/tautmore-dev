import { func, string } from 'prop-types';
import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter,
} from 'react-bootstrap';

const FinishExamPopup = ({
    setFinishTest, modal, setModal,
}) => {
    const FinishExam = () => {
        setFinishTest('step3');
    };
    return (
        <div>
            <Modal
                isOpen
                toggle={() => setModal(!modal)}
                className="delete-popup"
            >
                {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
                <ModalBody>Are you sure you want to delete?</ModalBody>
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
