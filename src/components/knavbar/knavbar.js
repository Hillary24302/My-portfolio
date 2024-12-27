import React, { cloneElement, isValidElement, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { AiOutlineClose as MenuClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 as MenuOpen } from 'react-icons/hi';

import "./knavbar.css";

const modes = ["horizontal", "vertical"];

const KNavbar = ({ mode = "horizontal", children, ...rest }) => {
  const modeClass = modes.includes(mode) ? mode : "horizontal";

  return (
    children && (
      <nav className={`k-navbar ${modeClass}`} {...rest}>
        {children}
      </nav>
    )
  );
};

KNavbar.Brand = ({ children, className }) => {
  return (
    children && (
      <div className={`k-nav-brand ${className ?? ""}`}>{children}</div>
    )
  );
};

const alignmentClasses = ["left", "right", "center"];

KNavbar.NavMenu = ({
  children,
  className,
  alignment = "left",
  ml,
  mr,
  mt,
  mb,
  style,
  ...rest
}) => {
  const alignmentClass = alignmentClasses.includes(alignment)
    ? alignment
    : "left";

  const styles = {
    ...(ml ? { marginLeft: ml + "px" } : {}),
    ...(mr ? { marginRight: mr + "px" } : {}),
    ...(mt ? { marginTop: mt + "px" } : {}),
    ...(mb ? { marginBottom: mb + "px" } : {}),
    ...style
  };

  return (
    children && (
      <ul
        className={`k-nav-menu flex-${alignmentClass} ${className ?? ""}`}
        style={styles}
        {...rest}
      >
        {children}
      </ul>
    )
  );
};

KNavbar.NavMenu.NavMenuItem = ({ children, className, ...rest }) => {
  return (
    children && (
      <li className={`k-nav-menu-item ${className ?? ""}`} {...rest}>
        {children}
      </li>
    )
  );
};

KNavbar.KNavLink = ({
  to = {},
  children,
  className,
  useExternalLink = false,
  ...rest
}) => {
  return (
    <Link
      to={to}
      target={useExternalLink ? "_BLANK" : undefined}
      className={`k-nav-link ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export const KResponsive = ({
  children,
  menuOpenIcon,
  menuCloseIcon
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  menuOpenIcon = menuOpenIcon?? <MenuOpen />;
  menuCloseIcon = menuCloseIcon?? <MenuClose />;

  const menuIconProps = {
    style: {
      fontSize: 24,
      fontWeight: '600'
    },
    className: "k-menu-icon"
  };

  const menuIcon = isMenuOpen ? menuCloseIcon : menuOpenIcon;
  const menuIconElem = isValidElement(menuIcon)? cloneElement(menuIcon, menuIconProps) : <span  {...menuIconProps}>{menuIcon}</span>;

  return isMobile ? (
    <div className="k-nav-hamburger">
      <KNavbar.KNavLink
        onClick={(e) => {
          setMenuOpen(!isMenuOpen)
          e.preventDefault();
        }}
        className='text-right'
      >
        {menuIconElem}
      </KNavbar.KNavLink>
      <div className={`k-nav-hamburger-inner ${isMenuOpen ? "active" : ""}`}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { ml: '0px', key: index })
        )}
      </div>
    </div> //Mobile
  ) : (
    children
  ); //desktop
};

export default KNavbar;
