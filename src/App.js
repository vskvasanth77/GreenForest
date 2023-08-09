import "./App.css";
import Body from "./component/Body";
import CardHolder from "./component/CardHolder";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <CardHolder />
      <Footer />
    </div>
  );
}

export default App;
