import { FunctionComponent, useState } from 'react'
import cocoWithLunaTatoo from '../images/coco_with_luna_back_tatoo.png'
import '../styles/1_header_luna_tatoo.scss'
import { useSpring, animated } from 'react-spring'

export const Header: FunctionComponent = () => {
  // const [loaded, setLoaded] = useState (false)
  const base = { to: { left: '50%' }, config: {
    tension: 800, friction: 820, mass: .6
  }}
  const textAnim1 = useSpring({ ...base, from: { left: '80%' } })
  const textAnim2 = useSpring({ ...base, from: { left: '30%' } })

  return (
    <div id="header">
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          <animated.div className="swirl-in-fwd">
            <img src={ cocoWithLunaTatoo } alt="Coco with a Luna tatoo"/>
          </animated.div>
        </div>
        <div id="header-text-container">
          <animated.div id="text-to-the-strongest" style={textAnim1}>To the strongest</animated.div>
          <animated.div id="text-luknight" style={textAnim2}>Luknight</animated.div>
        </div>
      </div>
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

