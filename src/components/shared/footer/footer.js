import React from "react"
import { Container, Row, Col } from "reactstrap"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container className={footerStyles.navContainer}>
        <Row>
          <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p className={footerStyles.copyright}>&copy; RSTG DEV 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
