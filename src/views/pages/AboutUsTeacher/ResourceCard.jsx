import React from 'react';
import { Link } from 'react-router-dom';
import CardImg from '../../../assets/images/card.jpg';

const ResourceCard = () => (

    <div className="card-wrap">
        <div className="resource-card">
            <img src={CardImg} alt="" />
            <h4>How to prepare your kids for an automated world in the 21st century?</h4>
            <Link to="/">
                <p>Read more</p>
            </Link>
        </div>

    </div>

);

export default ResourceCard;
