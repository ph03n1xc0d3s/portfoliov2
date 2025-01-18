import React from "react";
import "../assets/css/card.css";

const Card = ({ services }) => {
  console.log(services);
  return (
    <div className="cards-container">
      {services.map((service, index) => {
        return (
          <div className="card-info" key={index}>
            <div className="card-icon">
              <img src={service.serviceIcon} alt="service-icon" width={service.customWidth ? service.customWidth : '56px'} />
            </div>
            <div className="card-heading">
              <h4>{service.serviceName}</h4>
              <p>{service.serviceDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
