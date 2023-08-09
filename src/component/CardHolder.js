import Card from "./Card";
import data from "../datacard/DataCardTetra";
import data2 from "../datacard/DataCardGoldfish";
import data3 from "../datacard/DataCardCicifish";
import "../styles/CardHolder.css";

const CardHolder = () => {
  return (
    <>
      <h1 className="title">Categories</h1>
      <div className="holder">
        <h2 className="subtitle">Tetra Fish</h2>
        <div className="scroller">
          <div className="cardhandler">
            <Card image={data[0].image} fishname={data[0].fishname} />
            <Card image={data[1].image} fishname={data[1].fishname} />
            <Card image={data[2].image} fishname={data[2].fishname} />
            <Card image={data[3].image} fishname={data[3].fishname} />
            <Card image={data[4].image} fishname={data[4].fishname} />
            <Card image={data[5].image} fishname={data[5].fishname} />
            <Card image={data[6].image} fishname={data[6].fishname} />
          </div>
        </div>
      </div>
      {/* Gold Fish card */}
      <div className="holder">
        <h2 className="subtitle">Golden Fish</h2>
        <div className="scroller">
          <div className="cardhandler">
            <Card image={data2[0].image} fishname={data2[0].fishname} />
            <Card image={data2[1].image} fishname={data2[1].fishname} />
            <Card image={data2[2].image} fishname={data2[2].fishname} />
            <Card image={data2[3].image} fishname={data2[3].fishname} />
            <Card image={data2[4].image} fishname={data2[4].fishname} />
            <Card image={data2[5].image} fishname={data2[5].fishname} />
            <Card image={data2[6].image} fishname={data2[6].fishname} />
          </div>
        </div>
      </div>

      {/*cic fish card*/}

      <div className="holder">
        <h2 className="subtitle">Cici Fish</h2>
        <div className="scroller">
          <div className="cardhandler">
            <Card image={data3[0].image} fishname={data3[0].fishname} />
            <Card image={data3[1].image} fishname={data3[1].fishname} />
            <Card image={data3[2].image} fishname={data3[2].fishname} />
            <Card image={data3[3].image} fishname={data3[3].fishname} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CardHolder;
