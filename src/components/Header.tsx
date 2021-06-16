import cocoWithLunaTatoo from 'images/coco_with_luna_back_tatoo.png'
import 'styles/Header.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .95, initialInView: true })

  const getTextAnim = (prop: 'right'|'left') => ({
    ...(inView ? { from: { [prop]: '80%' }, to: { [prop]: '50%'  } }
               : { from: { [prop]: '50%' }, to: { [prop]: '-10%' } }),
    config: configs.longEaseOut
  })

  const fade = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.shortEaseOut
  })

  return (
    <div id="header" ref={ref}>
      <div id="header-bg"></div>
      <animated.div id="dark-overlay" style={fade}></animated.div>
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          <animated.div style={fade}>
            <img src={cocoWithLunaTatoo} alt="Coco with a Luna tatoo"/>
          </animated.div>
        </div>

        <div id="header-text-container">
          <animated.div
            id="text-to-the-strongest"
            style={useSpring (getTextAnim ('left'))}
          > To the strongest
          </animated.div>
          <animated.div
            id="text-luknight"
            style={useSpring (getTextAnim ('right'))}
          > Luknight
          </animated.div>
        </div>
      </div>
    </div>
  )
}
