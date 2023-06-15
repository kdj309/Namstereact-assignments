import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Navbar = () => {
  const [islogin, setislogin] = useState(true)
  return (
    <div className="container">
      <div className="Header">
        <h2  onClick={()=>{
          somevalue="bcd"
          console.log(<Navbar/>);
          }}>Homley foods</h2>
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <ul>
        <li>
          <a href="/" >Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <button className="btn" onClick={()=>setislogin((prev)=>!prev)}>{islogin==true?"Logout":"Login"}</button>
        </li>
      </ul>
    </div>
  );
}
  export default Navbar