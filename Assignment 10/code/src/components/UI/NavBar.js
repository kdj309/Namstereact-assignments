import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [islogin, setislogin] = useState(true)
  return (
    <div className="container" style={{boxShadow:'0 15px 40px -20px rgba(40,44,63,.15)'}}>
      <div className="Header">
        <h2 >Homley foods</h2>
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="btn" onClick={()=>setislogin((prev)=>!prev)}>{islogin==true?"Logout":"Login"}</button>
        </li>
      </ul>
    </div>
  );
}
  export default Navbar