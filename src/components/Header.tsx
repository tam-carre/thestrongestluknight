import 'styles/Header.scss'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { text } from 'data/text'
import { Lang } from 'App'
import kanataLookingAtDragonWebp from 'images/kanata_looking_at_dragon.webp'
import kanataLookingAtDragonJpg from 'images/kanata_looking_at_dragon.jpg'
import kanataLookingAtDragonAvif from 'images/kanata_looking_at_dragon.avif'

export function Header () {
  const [loaded, setLoaded] = useState (false)
  const [ref, inView] = useInView ({ threshold: .95, initialInView: true })

  return (<>
    <div id="header" ref={ref}>
      <div className="header-bg">
        <div
          id="dark-overlay"
          style={{ opacity: loaded && inView ? 1 : 0 }}
        >
        </div>
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
              <div
                id="text-to-the-strongest"
                style={loaded && inView ? { opacity: 1, left: '50%' } : {}}
              >
                {text.header.toTheStrongest[lang]}
              </div>
              <div
                id="text-luknight"
                style={loaded && inView ? { opacity: 1, left: '55%' } : {}}
              >
                {text.header.luknight[lang]}
              </div>
            </div>
          )}
        </Lang.Consumer>
      </div>
    </div>
  </>)
}
