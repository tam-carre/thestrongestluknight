import cocoWithLunaTatoo from '../images/coco_with_luna_back_tatoo.png'
import '../styles/1_header_luna_tatoo.scss'
import { useSpring, animated } from 'react-spring'

export function Header () {
  return (
    <div id="header">
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          <animated.div>
            <img src={cocoWithLunaTatoo} alt="Coco with a Luna tatoo"/>
          </animated.div>
        </div>

        <div id="header-text-container">
          <animated.div
            id="text-to-the-strongest"
            style={useSpring (getLeftAnimToCenterFrom ('80%'))}
            data-text="To the strongest"
          > To the strongest
          </animated.div>
          <animated.div
            id="text-luknight"
            style={useSpring (getLeftAnimToCenterFrom ('30%'))}
            data-text="Luknight"
          > Luknight
          </animated.div>
        </div>
      </div>
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

function getLeftAnimToCenterFrom (left: string|number) {
  return {
    from: { left },
    to: { left: '50%' },
    config: {
      tension: 800,
      friction: 820,
      mass: .6,
      precision: 0.001
    }
  }
}
