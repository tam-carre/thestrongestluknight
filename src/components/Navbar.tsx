import Scrollspy from 'react-scrollspy'
import 'styles/Navbar.scss'
import { useScrollIndicator } from 'react-use-scroll-indicator'

export function Navbar () {
  const [scroll] = useScrollIndicator ()
  return (
    <div id="navbar">
      <div id="progress-bar">
        <div id="progress-bar-elapsed" style={{width: scroll.value+'%'}}></div>
      </div>
      <Scrollspy
        items={ ['header', 'messages', 'credit-wrapper'] }
        currentClassName="is-current"
      >
        <a href="#header">
          Top
        </a>
        <a href="#messages">
          Messages
        </a>
        <a href="#credit-wrapper">
          Credits
        </a>
      </Scrollspy>
    </div>
  )
}
