import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "We endeavour to offer free shipping to our local clients as an endeavour to demonstrate our appreciation "
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "We endeavour to offer free shipping to our local clients as an endeavour to demonstrate our appreciation "
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secure payment",
        text:
          "We endeavour to offer free shipping to our local clients as an endeavour to demonstrate our appreciation "
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 text-center col-md-4 my-3"
                  key={item.id}
                >
                  <div>{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

export default Services;

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
`;
