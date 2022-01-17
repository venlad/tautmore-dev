import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {
    object,
} from 'prop-types';
import { dropdownMultiValueTimeSlotStyles } from './customCssDef';
import {
    timeSlots,
} from './mockData/Coursedetailsdata';

const TimeSlots = ({
    setTimeSlotMonday, setTimeSlotTuesday, setTimeSlotWednesday,
    setTimeSlotThursday, setTimeSlotFriday, setTimeSlotSaturday,
    validation,
}) => (
    <div className="coursedetails-main">
        <div className="heading-and-dropdown">

            <div className="heading">
                <h2>CHOOSE TIME SLOT</h2>
                <p>Select your desired time slot for each day

                </p>
            </div>

            <div className="dropdowns">
                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">MONDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            onChange={(value) => setTimeSlotMonday(value)}
                            placeholderButtonLabel="Select here"
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotMondayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>

                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">TUESDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            placeholderButtonLabel="Select here"
                            onChange={(value) => setTimeSlotTuesday(value)}
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotTuesdayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>
            </div>

            <div className="dropdowns">
                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">WEDNESDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            placeholderButtonLabel="Select here"
                            onChange={(value) => setTimeSlotWednesday(value)}
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotWednesdayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>

                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">THURSDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            placeholderButtonLabel="Select here"
                            onChange={(value) => setTimeSlotThursday(value)}
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotThursdayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>
            </div>

            <div className="dropdowns">
                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">FRIDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            placeholderButtonLabel="Select here"
                            onChange={(value) => setTimeSlotFriday(value)}
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotFridayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>

                <div className="col-md-7 course-detail-select">
                    <div className="col-md-7 course-detail-select mutiple-dropdown-part">

                        <div className="label-div"><span className="bold-weekday">SATURDAY</span> (Select at least 4 time slots)*</div>
                        <ReactMultiSelectCheckboxes
                            options={timeSlots}
                            placeholderButtonLabel="Select here"
                            onChange={(value) => setTimeSlotSaturday(value)}
                            styles={dropdownMultiValueTimeSlotStyles}
                        />
                        {validation.timeSlotSaturdayTeacher && <span className="error-msg">Timeslots are required.</span>}
                    </div>
                </div>
            </div>

        </div>

    </div>

);

TimeSlots.propTypes = {
    setTimeSlotMonday: object.isRequired,
    setTimeSlotTuesday: object.isRequired,
    setTimeSlotWednesday: object.isRequired,
    setTimeSlotThursday: object.isRequired,
    setTimeSlotFriday: object.isRequired,
    setTimeSlotSaturday: object.isRequired,
    validation: object.isRequired,

};

export default  TimeSlots;
