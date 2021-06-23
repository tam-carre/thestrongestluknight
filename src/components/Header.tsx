import cocoWithLunaTatoo from 'images/coco_with_luna_back_tatoo.png'
import cocoWithLunaTatooAvif from 'images/coco_with_luna_back_tatoo.avif'
import cocoWithLunaTatooWebp from 'images/coco_with_luna_back_tatoo.webp'
import 'styles/Header.scss'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'
import { text } from 'data/text'
import { Lang } from 'App'
import kanataLookingAtDragonWebp from 'images/kanata_looking_at_dragon.webp'
import kanataLookingAtDragonJpg from 'images/kanata_looking_at_dragon.jpg'
import kanataLookingAtDragonAvif from 'images/kanata_looking_at_dragon.avif'

export function Header () {
  const [loaded, setLoaded] = useState (false)
  const [ref, inView] = useInView ({ threshold: 1, initialInView: true })
  const topTextStyle = useSpring (getTextAnim ('left', inView));
  const bottomTextStyle = useSpring (getTextAnim ('right', inView));

  const fade = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.veryShortEaseOut
  })

  return (<>
    <div id="header" ref={ref}>
      <div className="header-bg">
        <div id="dark-overlay" className={loaded ? 'fade-in' : 'invisible'}></div>
        <div className={loaded ? 'fade-in' : 'invisible'}>
          <picture>
            <source srcSet={kanataLookingAtDragonAvif} type="image/avif"/>
            <source srcSet={kanataLookingAtDragonWebp} type="image/webp"/>
            <img
              src={kanataLookingAtDragonJpg} alt=""
              onLoad={() => setLoaded (true)}
            />
          </picture>
        </div>
     </div>
      <div id="cocoTatooContainer">
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
