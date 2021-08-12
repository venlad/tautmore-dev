import React from "react";
import PhysicalclassroomBlock from "./PhysicalclassroomBlock";
import userone from "../../../assets/images/celebration.png";
import usertwo from "../../../assets/images/online-class.png";
import userthree from "../../../assets/images/male-teacher.png";
import userfour from "../../../assets/images/trophy.png";

function Physicalclassroom() {
  return (
    <div>
      <div className="physical-classroom-main">
        <h4>
          As good as a physical class<span>room</span>
        </h4>

        <p className="main-p">
          At Tautmore we have created processes to mimic physical classrooms and
          help your child learn with similar enthusiasm
        </p>

        <div className="row">
          <PhysicalclassroomBlock
            title="Joyful, Self paced 
                learning"
            desc="Lorem ipsum dolar sit amet Sip alum doren"
            image={userone}
          />

          <PhysicalclassroomBlock
            title=" Live classes & 
            assessments."
            desc="Lorem ipsum dolar sit amet Sip alum doren"
            image={usertwo}
          />

          <PhysicalclassroomBlock
            title=" Doubt clearing
            sessions."
            desc="Lorem ipsum dolar sit amet Sip alum doren"
            image={userthree}
          />

          <PhysicalclassroomBlock
            title=" Fun badges &
            
            awards"
            desc="Lorem ipsum dolar sit amet Sip alum doren"
            image={userfour}
          />
        </div>
      </div>
    </div>
  );
}

export default Physicalclassroom;
