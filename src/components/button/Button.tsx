import "./_button.scss";

import classNames from "classnames";
import * as React from "react";

interface ButtonProps {
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  customClassName?: string;
}

function Button({onClick, children, customClassName}: ButtonProps) {
  const buttonClassName = classNames("button typography--button", customClassName);

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
