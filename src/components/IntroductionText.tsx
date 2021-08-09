import 'styles/IntroductionText.scss'
import { Lang } from 'App'
import { text } from 'data/text'
import { Fragment } from 'react'

export function IntroductionText () {
  return (
    <Lang.Consumer>{lang => (
      <Fragment>
        <p> {text.introduction.firstParagraph[lang]} </p>
        <p> {text.introduction.secondParagraph[lang]} </p>
      </Fragment>
    )}</Lang.Consumer>
  )
}
