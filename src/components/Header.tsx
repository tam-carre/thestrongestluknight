import 'styles/Header.scss'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { text } from 'data/text'
import { Lang } from 'App'
import { Fragment } from 'react'
import headerWebp from 'images/kanata_looking_at_dragon.webp'
import headerJpg from 'images/kanata_looking_at_dragon.jpg'
import headerAvif from 'images/kanata_looking_at_dragon.avif'

export function Header () {
  const [loaded, setLoaded] = useState (false)
  const [ref, inView]       = useInView ({ threshold: .95, initialInView: true })

  return (
    <Fragment>
      <HeaderBg loaded={loaded} inView={inView} onLoad={setLoaded}/ >
        <Lang.Consumer>{lang =>
          <h1 ref={ref} className={loaded && inView ? 'in-view' : ''}>
            <span> {text.header.toTheStrongest[lang]} </span>
            <span> {text.header.luknight[lang]} </span>
          </h1>
        }</Lang.Consumer>
    </Fragment>
  )
}

///////////////////////////////////////////////////////////////////////////////

function HeaderBg ({loaded, inView, onLoad}: HeaderBgProps) {
  return (
    <div className="header-bg">
      <div id="dark-overlay" style={{ opacity: loaded && inView ? 1 : 0 }} />
      <div className={loaded ? 'fade-in' : 'invisible'}>
        <picture>
          <source srcSet={headerAvif} type="image/avif"/>
          <source srcSet={headerWebp} type="image/webp"/>
          <img src={headerJpg} alt="" onLoad={() => onLoad (true)} />
        </picture>
      </div>
   </div>
  )
}

interface HeaderBgProps {
  loaded: boolean
  inView: boolean
  onLoad: React.Dispatch<React.SetStateAction<boolean>>
}
