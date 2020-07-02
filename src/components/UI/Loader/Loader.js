import React from "react";
import {Spinner} from "reactstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="overlay">
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        className="Loader"
        color="primary"
      />
    </div>
  );
};

export default Loader;
