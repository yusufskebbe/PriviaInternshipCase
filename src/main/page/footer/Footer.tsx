import {ReactComponent as TwitterIcon} from "../../../core/ui/assets/icons/twitter.svg";
import {ReactComponent as FacebookIcon} from "../../../core/ui/assets/icons/facebook.svg";
import {ReactComponent as LinkedInIcon} from "../../../core/ui/assets/icons/linkedin.svg";
import {ReactComponent as Logo} from "../../../core/ui/assets/images/logo.svg";

import "./_footer.scss";

import React from "react";

interface FooterLinkItem {
  title: string;
  links: {id: number; link: string}[];
}

const footerLinkItems: FooterLinkItem[] = [
  {
    title: "Product",
    links: [
      {id: 1, link: "Landingpage"},
      {id: 2, link: "Features"},
      {id: 3, link: "Documentation"},
      {id: 4, link: "Refferral Program"},
      {id: 5, link: "Pricing"}
    ]
  },
  {
    title: "Services",
    links: [
      {id: 6, link: "Documentation"},
      {id: 7, link: "Design"},
      {id: 8, link: "Themes"},
      {id: 9, link: "Illustrations"},
      {id: 10, link: "UI Kit"}
    ]
  },
  {
    title: "Company",
    links: [
      {id: 11, link: "About"},
      {id: 12, link: "Terms"},
      {id: 13, link: "Privacy Policy"},
      {id: 14, link: "Careers"}
    ]
  },
  {
    title: "More",
    links: [
      {id: 15, link: "Documentation"},
      {id: 16, link: "License"},
      {id: 17, link: "Changelog"}
    ]
  }
];

function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"footer__info"}>
        <div className={"footer__info__content"}>
          <Logo />

          <div className={"footer__info__social"}>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>

        <small className={"footer__info__copyright"}>{"© 2021 Privia"}</small>
      </div>
      <div className={"footer__links"}>
        {footerLinkItems.map((footerLinkItem) => {
          return (
            <div key={footerLinkItem.title} className={"footer__link-item"}>
              <h4 className={"footer__link-item__title typography--small"}>
                {footerLinkItem.title}
              </h4>

              {footerLinkItem.links.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={"link"}
                    className={"footer__link-item__link typography--small"}>
                    {link.link}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
