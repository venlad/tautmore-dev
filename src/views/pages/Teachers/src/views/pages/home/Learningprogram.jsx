import React from 'react';
import LearningprogramBlock from './LearningprogramBlock';

function Learningprogram() {
    return (
        <div className="learningprogram-main">
            <div className="row">
                <div className="col-md-3 col-sm-12 learning-progress-left">
                    <h4>
                        <span className="our">Our</span>
                        <span className="learn">learning</span>
                    </h4>
                    <h4>programs - A</h4>
                    <h4>holistic approach.</h4>

                    <p>
                        We pride ourselves in our ability to provide holistic learning for
                        your child. Our educators have carefully crafted programs that help
                        your child with learning various topics & skillsets in classroom &
                        beyond.
                    </p>
                </div>
                <div className="col-md-9 col-sm-12 learning-progress-right">
                    <div className="row">
                        <LearningprogramBlock
                            title="Classroom"
                            desc="Lorem ipsum dolar sit ametSip alum doren"
                            className="first"
                        />

                        <LearningprogramBlock
                            title="Extra curricular activities "
                            desc="Lorem ipsum dolar sit ametSip alum doren"
                            className="second"
                            second="secondtop"
                        />
                    </div>

                    <div className="row">
                        <LearningprogramBlock
                            title="Self-paced learning"
                            desc="Lorem ipsum dolar sit ametSip alum doren"
                            className="third"
                        />

                        <LearningprogramBlock
                            title="Olympiad"
                            desc="Lorem ipsum dolar sit ametSip alum doren"
                            className="fourth"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learningprogram;
