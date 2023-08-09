import "../styles/Nav.css";
const Nav = () => {
  return (
    <>
      <nav className="nav-handler">
        <a className="logo">
          GREEN <span className="forest">FOREST</span>
        </a>
        <ul className="nav-list">
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT US</li>
        </ul>
        <button className="btn">LOGIN</button>
      </nav>
    </>
  );
};
export default Nav;
