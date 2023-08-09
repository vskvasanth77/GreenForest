import "../styles/Body.css";
import fish from "../images/bodyfish1.png";
import react from "react";

const Body = () => {
  return (
    <>
      <div className="bodyhandler">
        <div className="left-body">
          <h1 className="heading">
            Meet The <span className="highlight">BEAUTIFUL CREATURE</span>{" "}
            UnderWater
          </h1>
          <div className="p1">
            <p>We bring you this exclusive's curated collection of fish </p>
            <p>We hope you will take the plunge to appreciate </p>
          </div>

          <button className="b1">LET'S EXPLORE THE UNDERWORLD</button>
          <div className="btn2">
            <button className="b2">LOGIN</button>
            <button className="b3">SIGN UP</button>
          </div>
        </div>
        <div className="img-handler">
          <img className="fish" src={fish} alt="failed" />
        </div>
      </div>
    </>
  );
};
export default Body;
