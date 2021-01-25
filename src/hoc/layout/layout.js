import React from "react"

import Header from "../../components/shared/header/header"
import Footer from "../../components/shared/footer/footer"
import "typeface-ubuntu"
import "typeface-poppins"
import "typeface-mitr"
import "typeface-roboto"
import "../../styles/app.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container} fluid>
      {/* <Header /> */}
      <div className={layoutStyles.main}>{props.children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
