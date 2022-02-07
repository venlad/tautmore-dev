import React, { useState } from 'react';
import AssignmentsAndHomeWork from './Assign&Home';

const MyStudents = () => {
    const [showAssignments, setShowAssignments] = useState(false);
    return (
        <div>
            <p>My Students</p>
            <button type="button" onClick={() => setShowAssignments(!showAssignments)}>Show Assignments</button>
            {showAssignments && (<AssignmentsAndHomeWork />)}

        </div>
    );
};

export default MyStudents;
