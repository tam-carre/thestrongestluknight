import 'styles/App.scss'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'

export function App () {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Messages />
      <Credits />
    </div>
  )
}
