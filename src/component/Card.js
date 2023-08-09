import "../styles/Card.css";
const Card = (props) => {
  return (
    <>
      <div className="controler">
        <div className="card">
          <img src={props.image} alt="image failed" />
          <div className="content">
            <h2>{props.fishname}</h2>

            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
