import React, { useState, useEffect, useRef } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"
import Scrollspy from "react-scrollspy"

import Scroll from "../../../utils/scroll"
import classes from "./header.module.scss"
import HeaderLogoSVG from "../svg/headerLogoSVG"
import Backdrop from "../UI/Backdrop/Backdrop"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOffset, setIsOffset] = useState(null)
  const [hideNav, setHideNav] = useState(false)

  const previousScrollPosition = useRef(0)

  const toggle = () => setIsOpen(!isOpen)

  const handleOffset = () => {
    setIsOffset(window.scrollY > 0)
  }

  const handleHideNav = () => {
    if (
      previousScrollPosition.current < window.scrollY &&
      window.scrollY > 100
    ) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
    previousScrollPosition.current = window.scrollY
  }

  useEffect(() => {
    document.addEventListener("scroll", handleOffset)
    document.addEventListener("scroll", handleHideNav)
  }, [])

  return (
    <React.Fragment>
      <Navbar
        className={`${classes.navbar} ${isOffset ? classes.down : classes.up}`}
        fixed="top"
        dark
        expand="lg"
        style={{ top: `${hideNav ? "-5rem" : "0"}` }}
      >
        <Scroll type="id" element="intro">
          <a
            data-sal="slide-down"
            data-sal-delay="100"
            data-sal-duration="800"
            data-sal-easing="ease-in-out-back"
            aria-label="Start"
            className={classes.navbarBrand}
            href="!#"
          >
            <HeaderLogoSVG className={classes.logo} />
          </a>
        </Scroll>
        <NavbarToggler
          className={`${classes.toggler} ${isOpen && classes.open}`}
          onClick={toggle}
        >
          <div className={classes.icon}></div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Scrollspy
              items={["intro", "projects", "about", "contact"]}
              currentClassName={classes.activeNavLink}
              offset={-300}
            >
              <NavItem className={classes.NavItem}>
                {/* <Scroll type="id" element="intro">
                <a
                  data-sal="slide-down"
                  data-sal-delay="200"
                  data-sal-duration="800"
                  data-sal-easing="ease-in-out-back"
                  className={classes.navLink}
                  href="!#"
                >
                  start
                </a>
              </Scroll> */}
              </NavItem>
              <NavItem
                className={classes.NavItem}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <Scroll type="id" element="projects">
                  <a
                    data-sal="slide-down"
                    data-sal-delay="200"
                    data-sal-duration="800"
                    data-sal-easing="ease-in-out-back"
                    className={classes.navLink}
                    href="!#"
                  >
                    <span className={classes.number}>01.</span> portfolio
                  </a>
                </Scroll>
              </NavItem>
              <NavItem
                className={classes.NavItem}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <Scroll type="id" element="about">
                  <a
                    data-sal="slide-down"
                    data-sal-delay="300"
                    data-sal-duration="800"
                    data-sal-easing="ease-in-out-back"
                    className={classes.navLink}
                    href="!#"
                  >
                    <span className={classes.number}>02.</span> about
                  </a>
                </Scroll>
              </NavItem>
              <NavItem
                className={classes.NavItem}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <Scroll type="id" element="contact">
                  <a
                    data-sal="slide-down"
                    data-sal-delay="400"
                    data-sal-duration="800"
                    data-sal-easing="ease-in-out-back"
                    className={classes.navLink}
                    href="!#"
                  >
                    <span className={classes.number}>03.</span> contact
                  </a>
                </Scroll>
              </NavItem>
            </Scrollspy>
          </Nav>
        </Collapse>
      </Navbar>
      {isOpen && <Backdrop show onClick={() => setIsOpen(false)} />}
    </React.Fragment>
  )
}

export default Header
