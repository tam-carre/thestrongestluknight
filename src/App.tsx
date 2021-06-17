import 'styles/App.scss'
import * as React from 'react'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import { ScrollNotifier } from 'components/ScrollNotifier'
import classNames from 'classnames'
import cocoLuna from 'images/coco_with_luna_back_tatoo.png';
import kanaCoco from 'images/kanata_looking_at_dragon.png';
import { AssetLoader, AssetLoaderProps, LoadStatus } from 'components/AssetLoader'

const preloadAssets: AssetLoaderProps['assets'] = [
  { href: cocoLuna, as: 'image' },
  { href: kanaCoco, as: 'image' },
]

export function App () {
  return (
    <AssetLoader assets={preloadAssets}>
      {LoadedApp}
    </AssetLoader>
  )
}

///////////////////////////////////////////////////////////////////////////////

function LoadedApp (status: LoadStatus) {
  const [onMessages, setOnMessages] = React.useState(true);
  return status === LoadStatus.PENDING
    ? <div>Loading!!!</div>
    : <div className="App">
        <Navbar className={classNames({
          blur: onMessages,
        })} />
        <Header />
        <ScrollNotifier callback={setOnMessages}>
          <Messages />
          <Credits />
        </ScrollNotifier>
      </div>
}
