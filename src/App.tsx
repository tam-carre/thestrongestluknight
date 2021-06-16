import 'styles/App.scss'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'

export function App () {
  return (
    <div className="App">
      <Header />
      <Messages />
      <Credits />
    </div>
  )
}
