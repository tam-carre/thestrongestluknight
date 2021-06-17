import 'styles/App.scss'
import { useState } from 'react'
import { Header } from 'components/Header'
import { Credits } from 'components/Credits'
import { Messages } from 'components/Messages'
import { Navbar } from 'components/Navbar'
import { ScrollNotifier } from 'components/ScrollNotifier'
import classNames from 'classnames'

export function App () {
  const [atMessages, setAtMessages] = useState (false)
  const [atTop, setAtTop]           = useState (true)

  return (<>
    <div className="App">
      <Navbar className={classNames ({
        'on-top': atTop,
        'on-messages': atMessages,
      })} />
      <ScrollNotifier callback={setAtTop}>
        <div id="top"></div>
      </ScrollNotifier>
      <Header />
      <ScrollNotifier callback={setAtMessages}>
        <Messages />
      </ScrollNotifier>
      <Credits />
    </div>
  </>)
}
