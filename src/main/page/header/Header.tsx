import {ReactComponent as Logo} from "../../../core/ui/assets/images/logo.svg";
import {ReactComponent as MenuIcon} from "../../../core/ui/assets/icons/menuIcon.svg";
import {ReactComponent as CloseIcon} from "../../../core/ui/assets/icons/close.svg";

import "./_header.scss";

import React, {useState} from "react";
import {Link} from "react-router-dom";

import Button from "../../../components/button/Button";
import classNames from "classnames";
//import HeaderMobile from "./HeaderMobile";

type navLinkItem = {
  id: string;
  to?: string;
  content: string;
};

const navLinkItems: navLinkItem[] = [
  {
    id: "about",
    content: "About",
    to: "/about"
  },
  {
    id: "product",
    content: "Product",
    to: "/product"
  },
  {
    id: "pricing",
    content: "Pricing",
    to: "/pricing"
  },
  {
    id: "resources",
    content: "Resources",
    to: "/resources"
  },
  {
    id: "customers",
    content: "Customers",
    to: "customers"
  }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [product, setProduct] = useState(0);
  //const [pricing, setPricing] = useState(0);
  // const [resources, setResources] = useState(0);
  //const [customers, setCustomers] = useState(0);

  return (
    <header className={classNames("header", {"header--menu": isMenuOpen})}>
      <Logo />
      <div className={"header__nav"}>
        <ul className={"header__nav__list"}>
          {navLinkItems.map((item) => {
            return (
              <Link key={item.id} className={"header__nav__list-item"} to={item.to}>
                {item.content}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={"header__auth"}>
        <p className={"typography--small"}>Login</p>

        <Button customClassName={"header__auth-start"}>{"Start free trial"}</Button>
      </div>
      {isMenuOpen ? (
        <CloseIcon onClick={handleMenuClick} className={"header__menu"} />
      ) : (
        <MenuIcon onClick={handleMenuClick} className={"header__menu"} />
      )}
    </header>
  );
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
}

export default Header;
