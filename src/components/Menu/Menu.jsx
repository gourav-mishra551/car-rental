import "./menu.css";
import Card from "../card/card";
const Menu = () => {
  return (
    <div className="menu-main">
      <h1>Best Cab Service In Jharkhand And Bihar</h1>
      <p>
        MishraTravels offers city taxis, inter-city cabs, and local cabs at
        hourly packages.
      </p>
      <Card/>
      <div className="lisr-main">
      <div className="list">
        <h2>We provide Car for following ocassions</h2>
        <ul>
          <li>
            <span>Travelling</span>
          </li>
          <li>
            <span>Tourism</span>
          </li>
          <li>
            <span>Wedding</span>
          </li>
          <li>
            <span>Personal Booking</span>
          </li>
          <li>
            <span>Inter city travel</span>
          </li>
          <li>
            <span>Cabs facility is also provided</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Menu;
