import "../styles/Footer.css";
import map from "../images/map/map1.png";

const Footer = () => {
  const para1 =
    "Notice: We only deliver throughout Chennai. One shall place your order for pickup from dunzo or porter from Just Fish. Delivery charges are applicable.";
  const para2 =
    "#38 Jalaram krupa randal nivas, devarachikkanahalli bus stop, bannerghata road, bangalore 560076";
  return (
    <>
      <div className="foothandler">
        <div className="rel">
          <div className="headinghandler">
            <h1>
              GREEN <span> FOREST</span>
            </h1>
            <h2>Contact Us</h2>
          </div>
          <div className="footcontent">
            <div className="content1">
              <h2>About Us</h2>
              <p>{para1}</p>
            </div>
            <div className="content2">
              <h2>Visit Us</h2>
              <p>{para2}</p>
            </div>
          </div>
          <div className="imagehandler">
            <img src={map} alt="map failed to load" />
          </div>
          <footer className="footer">
            <span>Terms and Conditions</span>
            <span>Return and Refund Policy</span>
            <span>Privacy Policy</span>
            <span>Shipping and Payment Policy</span>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
