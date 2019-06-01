import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about placeholder"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Here find info about our phenomenal company, we offre a lot of
              ideal services that are rearly found elsewhere. Please kingly
              contack us if you require further assistance in acquiring our
              products or serices.
            </p>
            <p className="text-lead text-muted my-3">
              Regarding the source and quality of our products, we serve our
              employees with utmost respect and only seek to provide top quality
              products to our clientel. So far we've had a most fulfiled
              customer relation and strongly desire to keep it that way
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
