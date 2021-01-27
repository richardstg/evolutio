import React, { useState } from "react"
import { useForm } from "react-hook-form"
import isEmail from "validator/lib/isEmail"

import LoadingSpinner from "../../../shared/UI/LoadingSpinner/LoadingSpinner"
import Modal from "../../../shared/UI/Modal/Modal"
import classes from "./form.module.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const { register, handleSubmit, errors } = useForm()

  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = data => {
    setLoading(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setSuccess(true)
        setLoading(false)
      })
      .catch(error => {
        setFail(true)
        setLoading(false)
      })
  }

  return (
    <div className={classes.container}>
      <p>Call us on 0768000893 or send a message below.</p>
      {loading && <LoadingSpinner asOverlay />}
      <Modal
        show={success}
        onCancel={() => {
          setSuccess(false)
          props.onCancel()
        }}
      >
        <h3>Thank you!</h3>
        <h3>We will get back to you shortly.</h3>
        <button
          onClick={event => {
            event.preventDefault()
            setSuccess(false)
            props.onCancel()
          }}
          className={classes.button}
        >
          Close
        </button>
      </Modal>
      <Modal
        show={fail}
        onCancel={() => {
          setFail(false)
          props.onCancel()
        }}
      >
        <h3>
          Something went wrong. Please try again later or email directly at
          mikael@evolutioconsulting.se.
        </h3>
        <button
          onClick={event => {
            event.preventDefault()
            setFail(false)
            props.onCancel()
          }}
          className={classes.button}
        >
          Close
        </button>
      </Modal>
      <form
        name="contact"
        data-netlify="true"
        netlify
        method="POST"
        className={classes.form}
        // action="/application-sent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label for="email">
          <p className={`${classes.label} ${errors.email && classes.error}`}>
            Email*
          </p>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={classes.input}
          ref={register({
            required: true,
            validate: input => isEmail(input), // returns true if valid
          })}
        />
        <label for="message">
          <p className={`${classes.label} ${errors.message && classes.error}`}>
            Message*
          </p>
        </label>
        <textarea
          id="message"
          name="message"
          className={classes.input}
          ref={register({
            required: true,
          })}
        />
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
