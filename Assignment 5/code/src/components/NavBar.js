import { LOGO_URL } from "../utils/constants";


const Navbar = () => (
    <div className="container">
      <div className="Header">
        <h2>Homley foods</h2>
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
  export default Navbar