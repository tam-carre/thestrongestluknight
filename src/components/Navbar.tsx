import Scrollspy from 'react-scrollspy'
import 'styles/Navbar.scss'
import { Lang } from 'App'
import { text } from 'data/text'
import { useEffect, useState } from 'react'

export function Navbar ({ className, scrollElement }:
  { className?: string, scrollElement?: HTMLDivElement | null}) {
  const [scroll, setScroll] = useState (0)

  useEffect(() => {
    if (!scrollElement) return
    
    const scrollUpdateFn = () => {
      const { scrollTop, scrollHeight } = scrollElement
      setScroll((scrollTop + window.innerHeight) / scrollHeight * 100)
    }

    scrollUpdateFn ()
    scrollElement.addEventListener ('scroll', scrollUpdateFn)
    return () => scrollElement.removeEventListener ('scroll', scrollUpdateFn);
  }, [scrollElement])

  return (
    <nav className={className}>
      <div id="progress-bar">
        <div id="progress-bar-elapsed" style={{width: scroll+'%'}}></div>
      </div>

      <Lang.Consumer>{lang => (
        <Scrollspy
          rootEl="#site"
          items={['header', 'playlist', 'messages', 'credits']}
          currentClassName="is-current"
          offset={-50}
        >
          <a href="#header">{text.navbar.top[lang]}</a>
          <a href="#playlist">{text.navbar.playlist[lang]}</a>
          <a href="#messages">{text.navbar.messages[lang]}</a>
          <a href="#credits">{text.navbar.credits[lang]}</a>
        </Scrollspy>
      )}</Lang.Consumer>
    </nav>
  )
}
