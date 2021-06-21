import 'styles/App.scss'
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
import cocoLuna from 'images/coco_with_luna_back_tatoo.png'
import kanaCoco from 'images/kanata_looking_at_dragon.png'
import { AssetLoader, AssetLoaderProps, LoadStatus } from 'components/AssetLoader'
import { LanguageCode } from 'data/text'

export const Lang: Context<LanguageCode> = createContext ('en' as LanguageCode)

export function App () {
  return (
    <AssetLoader assets={preloadAssets}>
      {LoadedApp}
    </AssetLoader>
  )
}

///////////////////////////////////////////////////////////////////////////////

const preloadAssets: AssetLoaderProps['assets'] = [
  { href: cocoLuna, as: 'image' },
  { href: kanaCoco, as: 'image' },
]

function LoadedApp (status: LoadStatus) {
  const [language, setLanguage]     = useState ('en' as LanguageCode)
  const [atTop, setAtTop]           = useState (true)
  const [atIntro, setAtIntro]       = useState (false)
  const [atPlaylist, setAtPlaylist] = useState (false)

  return status === LoadStatus.PENDING
    ? <div>Loading!!!</div>
    : <Lang.Provider value={language}>
        <Navbar className={classNames ({
            'at-top': atTop,
            'at-intro': atIntro,
            'at-playlist': atPlaylist,
          })} />
        <div id="site" className={classNames('parallax-container', {
          jp: language === 'jp'
        })}>
        <LanguageButton
          className={classNames ({ 'at-top': atTop })}
          callback={setLanguage}
        />
          <ScrollNotifier callback={setAtTop}>
            <div id="top" />
          </ScrollNotifier>
          <Header />
          <div className='main-content'>
            <ScrollNotifier callback={setAtIntro} threshold={60}>
              <IntroductionText className={classNames ({ 'at-top': atTop })} />
            </ScrollNotifier>
            <ScrollNotifier callback={setAtPlaylist} threshold={30}>
              <Playlist />
              <Messages />
            <Credits />
            </ScrollNotifier>
          </div>
        </div>
      </Lang.Provider>
}
