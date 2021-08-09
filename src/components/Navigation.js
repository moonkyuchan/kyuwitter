import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul className="nav_ul">
        <li className="nav_li">
          <Link to="/">
            <sapn>Home</sapn>
            <AiOutlineHome style={{ marginLeft: "5px" }} size="14px" />
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/profile">
            <span>
              {userObj.displayName
                ? `${userObj.displayName} 의 Profile`
                : "Profile"}
            </span>
            <CgProfile style={{ marginLeft: "5px" }} size="14px" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
