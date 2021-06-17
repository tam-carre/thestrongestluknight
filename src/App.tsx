import 'styles/App.scss'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
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
  return status === LoadStatus.PENDING
    ? <div>Loading!!!</div>
    : <div className="App">
        <Navbar />
        <Header />
        <Messages />
        <Credits />
      </div>
}
