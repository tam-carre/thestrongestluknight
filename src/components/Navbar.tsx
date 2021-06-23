import Scrollspy from 'react-scrollspy'
import 'styles/Navbar.scss'
import { Lang } from 'App'
import { text } from 'data/text'
import { useEffect, useState } from 'react'
import { LanguageButton } from './LanguageButton'
import { LanguageCode } from 'data/text'

export function Navbar ({ className, scrollElement, setLanguage }: 
  { className?: string, scrollElement?: HTMLDivElement, setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>> }) {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (!scrollElement) {
      return;
    }
    
    const scrollUpdateFn = () => {
      setScroll(scrollElement.scrollTop / scrollElement.scrollHeight * 100);
    }

    scrollUpdateFn();
    scrollElement.addEventListener('scroll', scrollUpdateFn);
    return () => scrollElement.removeEventListener('scroll', scrollUpdateFn);
  }, [scrollElement])
  return (
    <div id="navbar" className={className ?? ''}>
      <div id="progress-bar">
        <div id="progress-bar-elapsed" style={{width: scroll+'%'}}></div>
      </div>
      <Lang.Consumer>
        {lang => (<>
          <Scrollspy
            rootEl="#site"
            items={['header', 'playlist-section', 'messages', 'credit-wrapper']}
            currentClassName="is-current"
            offset={-50}
          >
            <a href="#header">{text.navbar.top[lang]}</a>
            <a href="#playlist-section">{text.navbar.playlist[lang]}</a>
            <a href="#messages">{text.navbar.messages[lang]}</a>
            <a href="#credit-wrapper">{text.navbar.credits[lang]}</a>
          </Scrollspy>
          <LanguageButton
              className={className}
              callback={setLanguage}
            />
        </>)}
      </Lang.Consumer>
    </div>
  )
}
