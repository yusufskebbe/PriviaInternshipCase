import {ReactComponent as Logo} from "../../../core/ui/assets/images/logo.svg";
import {ReactComponent as MenuIcon} from "../../../core/ui/assets/icons/menuIcon.svg";

import "./_header.scss";

import React from "react";

import Button from "../../../components/button/Button";

type navLinkItem = {
  id: string;
  to?: string;
  content: string;
};

const navLinkItems: navLinkItem[] = [
  {
    id: "about",
    content: "About"
  },
  {
    id: "product",
    content: "Product"
  },
  {
    id: "pricing",
    content: "Pricing"
  },
  {
    id: "resources",
    content: "Resources"
  },
  {
    id: "customers",
    content: "Customers"
  }
];

function Header() {
  return (
    <header className={"header"}>
      <Logo />

      <div className={"header__nav"}>
        <ul className={"header__nav__list"}>
          {navLinkItems.map((item) => {
            return (
              <li key={item.id} className={"header__nav__list-item typography--small"}>
                {item.content}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={"header__auth"}>
        <p className={"typography--small"}>Login</p>

        <Button customClassName={"header__auth-start"}>{"Start free trial"}</Button>
      </div>

      <MenuIcon className={"header__menu"} />
    </header>
  );
}

export default Header;
