import React from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import fakedata from "../../FakeData/fakedata"
import fakePlace from '../../FakePlace/FakePlace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'




const Destination = () => {
    const { veh, placeFrom, placeTo } = useParams();
    const { info } = fakedata.find(vehicle => vehicle.type === veh);
    const { gMap } = fakePlace.find(place => place.name === placeFrom);


    return (
        <div className="row">


            <div className="col-md-4 card cardStyle">
                <p className="mb-0 mt-3">From: {placeFrom}</p>
                <p className="mb-0 mt-3">To: {placeTo}</p>

                <br /><br />



                {
                    info.map(vehicleName =>
                        <div style={{ margin: '20px' }}>
                            <img style={{ width: '10%' }} src={vehicleName.images} alt="" />
                            {vehicleName.Name}
                            <span style={{ marginLeft: '10px' }}>
                                <FontAwesomeIcon icon={faUserFriends} />
                                {vehicleName.space}
                            </span>
                            <span style={{ marginLeft: '40%' }}>
                                {vehicleName.price}
                            </span>
                        </div>
                    )

                }
            </div>
            <div className="col-md-5 map-img">
                <div>
                    <iframe src={gMap} width="400px" height="400px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>

        </div>
    );
};

export default Destination;