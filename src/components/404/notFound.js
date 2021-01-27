import React from "react"
import { Container } from "reactstrap"
import { Link } from "gatsby"
import notFoundStyles from "./notFound.module.scss"

const NotFound = () => {
  return (
    <Container className={notFoundStyles.outerWrapper} fluid>
      <Container className={notFoundStyles.innerWrapper}>
        <h2 className={notFoundStyles.title}>Page not found.</h2>
        <div
        // data-sal="fade"
        // data-sal-delay="100"
        // data-sal-duration="800"
        // data-sal-easing="ease-out-bounce"
        >
          <Link to="/">
            <button className={notFoundStyles.button}>Home</button>
          </Link>
        </div>
      </Container>
    </Container>
  )
}

export default NotFound
