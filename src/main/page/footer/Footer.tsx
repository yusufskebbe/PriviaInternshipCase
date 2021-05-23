import {ReactComponent as TwitterIcon} from "../../../core/ui/assets/icons/twitter.svg";
import {ReactComponent as FacebookIcon} from "../../../core/ui/assets/icons/facebook.svg";
import {ReactComponent as LinkedInIcon} from "../../../core/ui/assets/icons/linkedin.svg";
import {ReactComponent as Logo} from "../../../core/ui/assets/images/logo.svg";

import "./_footer.scss";

import React from "react";

interface FooterLinkItem {
  title: string;
  links: string[];
}

const footerLinkItems: FooterLinkItem[] = [
  {
    title: "Product",
    links: ["Landingpage", "Features", "Documentation", "Refferral Program", "Pricing"]
  },
  {
    title: "Services",
    links: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"]
  },
  {
    title: "Company",
    links: ["About", "Terms", "Privacy Policy", "Careers"]
  },
  {
    title: "More",
    links: ["Documentation", "License", "Changelog"]
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
            <div className={"footer__link-item"}>
              <h4 className={"footer__link-item__title typography--small"}>
                {footerLinkItem.title}
              </h4>

              {footerLinkItem.links.map((link) => {
                return (
                  <a
                    key={link}
                    href={"link"}
                    className={"footer__link-item__link typography--small"}>
                    {link}
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
