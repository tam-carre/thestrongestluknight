import cocoWithLunaTatoo from 'images/coco_with_luna_back_tatoo.png'
import 'styles/Header.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'
import { text } from 'data/text'
import { Lang } from 'App'
import kanataLookingAtDragon from 'images/kanata_looking_at_dragon.png'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .95, initialInView: true })
  const topTextStyle = useSpring (getTextAnim ('left', inView));
  const bottomTextStyle = useSpring (getTextAnim ('right', inView));


  const fade = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.veryShortEaseOut
  })

  return (<>
    <div className="header-bg parallax-item">
      <animated.div id="dark-overlay" style={fade}></animated.div>
      <img src={kanataLookingAtDragon} alt="" />
    </div>
    <div id="header" ref={ref}>
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          <animated.div style={fade}>
            <img src={cocoWithLunaTatoo} alt="Coco with a Luna tatoo"/>
          </animated.div>
        </div>

        <Lang.Consumer>
          {lang => (
            <div id="header-text-container">
              <animated.div
                id="text-to-the-strongest"
                style={topTextStyle}
              >
                <animated.div style={fade}>
                  {text.header.toTheStrongest[lang]}
                </animated.div>
              </animated.div>
              <animated.div
                id="text-luknight"
                style={bottomTextStyle}
              >
                <animated.div style={fade}>
                  {text.header.luknight[lang]}
                </animated.div>
              </animated.div>
            </div>
          )}
        </Lang.Consumer>
      </div>
    </div>
  </>)
}

///////////////////////////////////////////////////////////////////////////////

const getTextAnim = (prop: 'right'|'left', inView: boolean) => ({
  ...(inView ? { from: { [prop]: '55%' }, to: { [prop]: '50%'  } }
             : { from: { [prop]: '50%' }, to: { [prop]: '40%' } }),
  config: configs.longEaseOut
})

const parallaxValues = [-75, 60];
