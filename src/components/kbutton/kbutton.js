import React from "react";
import { Link } from "react-router-dom";
import { classnames } from "../../utils/utils";

import "./kbutton.css";
//import Icons from "../../constants/icons";

const buttonTypes = ["default", "primary", "secondary"];

const KButton = ({
  type = "primary",
  outlined = false,
  href,
  children,
  className,
  ...rest
}) => {
  //k-button-primary, k-button-secondary, k-button-default
  const buttonType = buttonTypes.includes(type) ? type : buttonTypes[0];
  const classNames = classnames(
    `k-button k-button-${buttonType}`,
    outlined ? "k-button-outline" : "",
    className
  );

  return (
    <Link className={classNames} to={href ?? {}} {...rest}>
      {children}
    </Link>
  );
};

export default KButton;
