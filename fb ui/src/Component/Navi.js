import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./Navi.css";
import messenger from "../messenger.png";
import news from "../news.png";
import page from "../page.png";
import people from "../people.png";
import shop from "../shop.png";
import covid from "../covid19.png";
const Navi = () => {
  return (
    <div>
      <div className="sidebar">
        <h3> Menu </h3>{" "}
        <section>
          <span>
            <Avatar className="header-avatar" alt="" src="" />
            <h3> Lavanya Gudiputi </h3>{" "}
          </span>{" "}
        </section>
        <ul className="nav-link">
          <Link to="/">
            <img src={messenger} alt="messenger" className="header_logo" />
            <li> Messenger </li>
          </Link>
          <Link to="/">
            <img src={news} alt="messenger" className="header_logo" />
            <li> news </li>
          </Link>{" "}
          <Link to="/">
            <img src={page} alt="messenger" className="header_logo" />
            <li> Page </li>
          </Link>{" "}
          <Link to="/">
            <img src={people} alt="messenger" className="header_logo" />
            <li> People</li>
          </Link>{" "}
          <Link to="/">
            <img src={shop} alt="messenger" className="header_logo" />
            <li> Shop</li>
          </Link>
          <Link to="/">
            <img src={covid} alt="messenger" className="header_logo" />
            <li> Covid</li>
          </Link>
          <Link to="/">
            <img src={covid} alt="messenger" className="header_logo" />
            <li> Covid</li>
          </Link>{" "}
        </ul>
      </div>{" "}
    </div>
  );
};

export default Navi;
