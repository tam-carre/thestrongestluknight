import 'styles/App.scss'
import { useState } from 'react'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import { IntroductionText } from 'components/IntroductionText'
import { Playlist } from 'components/Playlist'
import { ScrollNotifier } from 'components/ScrollNotifier'
import classNames from 'classnames'
import cocoLuna from 'images/coco_with_luna_back_tatoo.png'
import kanaCoco from 'images/kanata_looking_at_dragon.png'
import { ParallaxProvider } from 'react-scroll-parallax'
import { AssetLoader, AssetLoaderProps, LoadStatus } from 'components/AssetLoader'

const preloadAssets: AssetLoaderProps['assets'] = [
  { href: cocoLuna, as: 'image' },
  { href: kanaCoco, as: 'image' },
]

export function App () {
  return (
    <ParallaxProvider>
      <AssetLoader assets={preloadAssets}>
        {LoadedApp}
      </AssetLoader>
    </ParallaxProvider>
  )
}

///////////////////////////////////////////////////////////////////////////////

function LoadedApp (status: LoadStatus) {
  const [atTop, setAtTop]           = useState (true)
  const [atIntro, setAtIntro]       = useState (false)
  const [atPlaylist, setAtPlaylist] = useState (false)
  const [atMessages, setAtMessages] = useState (false)
  const [atCredits, setAtCredits]   = useState (false)

  return status === LoadStatus.PENDING
    ? <div>Loading!!!</div>
    : <>
        <Navbar className={classNames ({
          'at-top': atTop,
          'at-intro': atIntro,
          'at-playlist': atPlaylist,
          'at-messages': atMessages,
          'at-credits': atCredits,
        })} />
          <ScrollNotifier callback={setAtTop}>
            <div id="top"></div>
          </ScrollNotifier>
          <Header />
          <ScrollNotifier callback={setAtIntro} threshold={60}>
            <IntroductionText className={classNames ({ 'at-top': atTop })} />
          </ScrollNotifier>
          <ScrollNotifier callback={setAtPlaylist} threshold={30}>
            <Playlist />
          </ScrollNotifier>
          <ScrollNotifier callback={setAtMessages} threshold={30}>
            <Messages />
          </ScrollNotifier>
          <ScrollNotifier callback={setAtCredits} threshold={30}>
          <Credits />
          </ScrollNotifier>
      </>
}
