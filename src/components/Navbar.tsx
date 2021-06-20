import Scrollspy from 'react-scrollspy'
import 'styles/Navbar.scss'
import { useScrollIndicator } from 'react-use-scroll-indicator'
import { Lang } from 'App'
import { text } from 'data/text'

export function Navbar ({ className }: { className?: string}) {
  const [scroll] = useScrollIndicator ()
  return (
    <div id="navbar" className={className ?? ''}>
      <div id="progress-bar">
        <div id="progress-bar-elapsed" style={{width: scroll.value+'%'}}></div>
      </div>
      <Lang.Consumer>
        {lang => (
          <Scrollspy
            items={['header', 'playlist-section', 'messages', 'credit-wrapper']}
            currentClassName="is-current"
            offset={-50}
          >
            <a href="#header">{text.navbar.top[lang]}</a>
            <a href="#playlist-section">{text.navbar.playlist[lang]}</a>
            <a href="#messages">{text.navbar.messages[lang]}</a>
            <a href="#credit-wrapper">{text.navbar.credits[lang]}</a>
          </Scrollspy>
        )}
      </Lang.Consumer>
    </div>
  )
}
