import cocoWithLunaTatoo from '../images/coco_with_luna_back_tatoo.png'
import '../styles/1_header_luna_tatoo.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { longEaseOut, mediumEaseOut, shortEaseOut } from '../utils/springs'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .5, initialInView: true })

	const getAnimToCenter = (start: string|number, exit: string|number) => ({
    from: inView ? { left: start } : { left: '50%' },
    to:   inView ? { left: '50%' } : { left: exit  },
    config: longEaseOut
  })

  const zoomIn = useSpring ({
    from: inView ? { opacity:  0  } : { opacity: 1 },
    to:   inView ? { opacity: 1  } : { opacity:  0 },
    config: mediumEaseOut
  })

  return (
    <div id="header" ref={ref}>
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          <animated.div style={zoomIn}>
            <img src={cocoWithLunaTatoo} alt="Coco with a Luna tatoo"/>
          </animated.div>
        </div>

        <div id="header-text-container">
          <animated.div
            id="text-to-the-strongest"
            style={useSpring (getAnimToCenter ('80%', '-30%'))}
          > To the strongest
          </animated.div>
          <animated.div
            id="text-luknight"
            style={useSpring (getAnimToCenter ('30%', '120%'))}
          > Luknight
          </animated.div>
        </div>
      </div>
    </div>
  )
}
