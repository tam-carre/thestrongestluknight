import 'styles/App.scss'
import * as React from 'react'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import { ScrollNotifier } from 'components/ScrollNotifier'
import classNames from 'classnames'

export function App () {
  const [onMessages, setOnMessages] = React.useState(true);
  return (
    <div className="App">
      <Navbar className={classNames({
        blur: onMessages,
      })} />
        <Header />
      <ScrollNotifier callback={setOnMessages}>
        <Messages />
        <Credits />
      </ScrollNotifier>
    </div>
  )
}
