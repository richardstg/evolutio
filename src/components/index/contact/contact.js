import React from "react"
import { Container } from "reactstrap"

import classes from "./contact.module.scss"
import Form from "../intro/form/form"

const Contact = () => {
  return (
    <Container id="contact" className={classes.outerWrapper} fluid>
      <Container className={classes.innerWrapper}>
        <h2
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce"
          className={classes.title}
        >
          <span className={classes.number}>03.</span> contact
        </h2>
        <Form />
      </Container>
    </Container>
  )
}

export default Contact
