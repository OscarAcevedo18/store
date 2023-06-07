import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");

  return (
    <div className="nav">
      <NavLink className={setActiveClass} end to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} end to="/Cart">
        Shopping cart
      </NavLink>
      <h3>
        Total Pedido $
        {/* {detail
          .map((item) => item.price * item.amount)
          .reduce((prev, curr) => prev + curr, 0)
          .toLocaleString("de-DE")} */}
      </h3>
    </div>
  );
}
