import 'styles/App.scss'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import cocoLuna from './images/coco_with_luna_back_tatoo.png';
import { AssetLoader, AssetLoaderProps, LoadStatus } from 'components/AssetLoader'

const preloadAssets: AssetLoaderProps['assets'] = [{
  href: cocoLuna,
  as: 'image',
}]


export function App() {
  return <AssetLoader assets={preloadAssets}>
    {LoadedApp}
  </AssetLoader>
}

export function LoadedApp (status: LoadStatus) {
  // Block rendering until the image is loaded
  if (status === LoadStatus.PENDING) {
    return <div />
  }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Messages />
      <Credits />
    </div>
  )
}
