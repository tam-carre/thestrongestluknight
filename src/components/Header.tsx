import cocoWithLunaTatoo from 'images/coco_with_luna_back_tatoo.png'
import 'styles/Header.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'
import { Parallax } from 'react-scroll-parallax'
import kanataLookingAtDragon from 'images/kanata_looking_at_dragon.png'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .95, initialInView: true })

  const getTextAnim = (prop: 'right'|'left') => ({
    ...(inView ? { from: { [prop]: '55%' }, to: { [prop]: '50%'  } }
               : { from: { [prop]: '50%' }, to: { [prop]: '40%' } }),
    config: configs.longEaseOut
  })

  const fade = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.veryShortEaseOut
  })

  return (<>
    <div id="header" ref={ref}>
    <Parallax className="header-bg" y={[-75, 60]} >
      <animated.div id="dark-overlay" style={fade}></animated.div>
      <img src={kanataLookingAtDragon} alt="" />
    </Parallax>
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
          >
            <animated.div style={fade}>To the strongest</animated.div>
          </animated.div>
          <animated.div
            id="text-luknight"
            style={useSpring (getTextAnim ('right'))}
          >
            <animated.div style={fade}>Luknight</animated.div>
          </animated.div>
        </div>
      </div>
    </div>
  </>)
}
