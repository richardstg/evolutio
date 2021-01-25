import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"
import classes from "./flipcard.module.scss"

const FlipCard = props => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div
      className={classes.cardContainer}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onClick={() => set(state => !state)}
    >
      {flipped && (
        <div className={classes.text}>
          <p>hej</p>
        </div>
      )}
      <a.div
        className={classes.card}
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          position: "relative",
        }}
      >
        <div
          className={`${classes.front} ${classes[props.projectName]}`}
          style={
            {
              // backgroundImage: `url(require("../../../../images/${props.imageName}"))`,
              // backgroundColor: "red",
            }
          }
        >
          {/* <img src={require(`../../../../images/${props.imageName}`)} alt="" /> */}
        </div>
      </a.div>
      <a.div
        className={classes.card}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          position: "absolute",
        }}
      >
        <div
          className={`${classes.front} ${classes[props.projectName]}`}
          style={
            {
              // backgroundImage: `url(require("../../../../images/${props.imageName}"))`,
            }
          }
        >
          {/* <img
            src={require(`../../../../images/${props.imageName}`)}
            alt=""
            style={{ transform: "rotateX(180deg)" }}
          /> */}
        </div>
      </a.div>
    </div>
  )
}

export default FlipCard

// import React from "react"

// import ReactCardFlip from "react-card-flip"

// class FlipCard extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isFlipped: false,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(e) {
//     e.preventDefault()
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
//   }

//   render() {
//     return (
//       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//         <YOUR_FRONT_COMPONENT>
//           This is the front of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_FRONT_COMPONENT>

//         <YOUR_BACK_COMPONENT>
//           This is the back of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_BACK_COMPONENT>
//       </ReactCardFlip>
//     )
//   }
// }

// export default FlipCard
