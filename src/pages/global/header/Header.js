import React from "react";
import KNavbar from "../../../components/knavbar/knavbar";
import Logo from "../../../components/brand/logo";
import { KResponsive } from "../../../components/knavbar/knavbar";
import { paths } from "../../../routes/paths";
import Container from "../../../components/container/container";
import HireMe from "../../../components/input/hireMe";
import { useMediaQuery } from "react-responsive";

const { Brand, NavMenu, KNavLink } = KNavbar;

const primaryMenu = [
  {
    title: "Home",
    url: paths.home,
    isExternalLink: false,
  },
  {
    title: "About",
    url: `${paths.home}#about`,
    isExternalLink: false,
  },
  {
    title: "Services",
    url: `${paths.home}#services`,
    isExternalLink: false,
  },
  {
    title: "Skill",
    url: `${paths.home}#skill`,
    isExternalLink: false,
  },
  {
    title: "Projects",
    url: `${paths.home}#project`,
    isExternalLink: false,
  },
  {
    title: "Contact",
    url: `${paths.home}#contact`,
    isExternalLink: false,
  },
];

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1000,
        borderBottom: "1px solid #C0CEEB",
      }}
    >
      <Container>
        {isMobile ? (
          <KNavbar>
            <Brand>
              <KNavLink to={paths.home}>
                <Logo />
              </KNavLink>
            </Brand>

            <KResponsive>
              <NavMenu alignment="right">
                <NavMenu.NavMenuItem>
                  <HireMe />
                </NavMenu.NavMenuItem>
              </NavMenu>
            </KResponsive>
          </KNavbar>
        ) : (
          // Render full navigation on desktop
          <KNavbar>
            <Brand>
              <KNavLink to={paths.home}>
                <Logo />
              </KNavLink>
            </Brand>

            <KResponsive>
              <NavMenu ml={56}>
                {primaryMenu.map((item, index) => (
                  <NavMenu.NavMenuItem key={index}>
                    <KNavLink
                      to={item.url}
                      useExternalLink={item.isExternalLink}
                    >
                      {item.title}
                    </KNavLink>
                  </NavMenu.NavMenuItem>
                ))}
              </NavMenu>

              <NavMenu alignment="right">
                <NavMenu.NavMenuItem>
                  <HireMe />
                </NavMenu.NavMenuItem>
              </NavMenu>
            </KResponsive>
          </KNavbar>
        )}
      </Container>
    </header>
  );
};

export default Header;
