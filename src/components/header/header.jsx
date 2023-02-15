import { Link,useLocation } from "react-router-dom";

import "./header.css";

const Header = (props) => {


  const Location=useLocation();
  return (
    <div className="header">
      <h1>To Do List (tuqa)</h1>

      <div className="topnav">

      <Link to="/add" className={Location.pathname === "/add"?'active':""}> To Do List Form </Link>
      <Link to="/view" className={Location.pathname.includes("view")?'active':""}>  Veiw List </Link>
        {/* <button className={`${props.page==="form"?"active":""}`} onClick={() => props.changepage("form")}>
          to do list form
        </button>
        <button className={`${props.page==="listview"?"active":""}`} onClick={() => props.changepage("listview")}>
          veiw list{" "}
        </button> */}
      </div>
    </div>
  );
};
export default Header;
