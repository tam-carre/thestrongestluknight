import cocoWithLunaTatoo from 'images/coco_with_luna_back_tatoo.png'
import cocoWithLunaTatooAvif from 'images/coco_with_luna_back_tatoo.avif'
import cocoWithLunaTatooWebp from 'images/coco_with_luna_back_tatoo.webp'
import 'styles/Header.scss'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'
import { text } from 'data/text'
import { Lang } from 'App'
import kanataLookingAtDragonWebp from 'images/kanata_looking_at_dragon.webp'
import kanataLookingAtDragonJpg from 'images/kanata_looking_at_dragon.jpg'
import kanataLookingAtDragonAvif from 'images/kanata_looking_at_dragon.avif'

export function Header () {
  const [ref, inView] = useInView ({ threshold: .95, initialInView: true })
  const topTextStyle = useSpring (getTextAnim ('left', inView));
  const bottomTextStyle = useSpring (getTextAnim ('right', inView));


  const fade = useSpring ({
    ...(inView ? anims.fadeIn : anims.fadeOut),
    config: configs.veryShortEaseOut
  })

  return (<>
    <div id="header" ref={ref}>
    <div className="header-bg" >
      <animated.div id="dark-overlay" style={fade}></animated.div>
      <picture>
        <source srcSet={kanataLookingAtDragonAvif} type="image/avif"/>
        <source srcSet={kanataLookingAtDragonWebp} type="image/webp"/>
        <img src={kanataLookingAtDragonJpg} alt=""/>
      </picture>
   </div>
      <div id="cocoTatooContainer">
        <div id="cocoTatooCircle">
          {/*<animated.div style={fade}>*/}
            {/*<picture>*/}
            {/*<source type="image/avif" srcSet={cocoWithLunaTatooAvif} />*/}
            {/*<source type="image/webp" srcSet={cocoWithLunaTatooWebp} />*/}
              {/*<img src={cocoWithLunaTatoo} alt="Coco with a Luna tatoo"/>*/}
            {/*</picture>*/}
            {/*</animated.div>*/}
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
