import cocoWithLunaTatoo from '../images/coco_with_luna_back_tatoo.png'
import '../styles/Header.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from '../utils/springs'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .5, initialInView: true })

	const getAnimToCenter = (start: string|number, exit: string|number) => ({
    ...(inView ? { from: { left: start }, to: { left: '50%' } }
               : { from: { left: '50%' }, to: { left: exit  } }),
    config: configs.longEaseOut
  })

  const zoomIn = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.mediumEaseOut
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
