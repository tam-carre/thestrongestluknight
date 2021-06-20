import 'styles/IntroductionText.scss'
import { Lang } from 'App'
import { text } from 'data/text'

export function IntroductionText ({ className }: { className?: string}) {
  return (
    <Lang.Consumer>
      {lang => (
        <div id="playlist-introduction-wrapper" className={className ?? ''}>
          <div id="playlist-introduction">
            <div>
              {text.introduction.firstParagraph[lang]}
            </div>
            <div id="playlist-introduction-paragraph-2">
              {text.introduction.secondParagraph[lang]}
            </div>
          </div>
        </div>
      )}
    </Lang.Consumer>
  )
}
