import React from 'react';
import { useHistory } from 'react-router';
import './Data.css';

const Data = (props) => {
    const { image, type } = props.ride;
    const history = useHistory()
    const handleBook = (type) => {
        history.push(`/destination/${type}`);
    }
    return (
        <div onClick={() => handleBook(type)} className="col-md-3 containers">
            <div className="p-3">
                <div className="card cartVehicle">
                    <div className="d-flex justify-content-center">
                        <img src={image} className="" alt="" />
                    </div>
                    <div className="card-body text-dark text-center">
                        <p className="card-text text-center"><strong>{type}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;

