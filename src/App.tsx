import 'styles/App.scss'
import 'styles/Parallax.scss'
import { createContext, useState, Context } from 'react'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import { LanguageButton } from 'components/LanguageButton'
import { IntroductionText } from 'components/IntroductionText'
import { Playlist } from 'components/Playlist'
import { ScrollNotifier } from 'components/ScrollNotifier'
import classNames from 'classnames'
import { LangCode } from 'data/text'

export const Lang: Context<LangCode> = createContext ('en' as LangCode)

export function App () {
  const [lang, setLang]         = useState ('en' as LangCode)
  const [atTop, setAtTop]       = useState (true)
  const [atIntro, setAtIntro]   = useState (false)
  const [atHead, setAtHead]     = useState (false)
  const [scrollEl, setScrollEl] = useState <HTMLDivElement | null> (null)

  return (
    <Lang.Provider value={lang}>
      <LanguageButton className={atTop ? 'at-top' : ''} callback={setLang} />

      <div id="site" className={lang} ref={setScrollEl}>
        <ScrollNotifier id="top" callback={setAtTop} el={scrollEl} />

        <Navbar
          scrollElement={scrollEl}
          className={classNames ({
            'at-top': atTop, 'at-header': atHead, 'at-intro': atIntro
          })}
        />

        <ScrollNotifier tag="header" id="header" callback={setAtHead} el={scrollEl} >
          <Header />
        </ScrollNotifier>

        <main>
          <ScrollNotifier
            tag="section" id="intro" callback={setAtIntro} el={scrollEl}
            className={atTop ? 'at-top' : ''}
          >
            <IntroductionText />
          </ScrollNotifier>

          <Playlist />
          <Messages />
        </main>

        <Credits />
      </div>
    </Lang.Provider>
  )
}
