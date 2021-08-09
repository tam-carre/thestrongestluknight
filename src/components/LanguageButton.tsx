import { LangCode } from 'data/text'
import { Lang } from 'App'
import 'styles/LanguageButton.scss'
import jp from 'images/jp.svg'
import gb from 'images/gb.svg'

export function LanguageButton ({className, callback}: LanguageButtonProps) {
  return (
    <Lang.Consumer>
      {lang => (
        <div
          id="lang-switcher"
          className={className ?? ''}
          onClick={() => callback (lang === 'en' ? 'jp' : 'en')}
        >
          {lang === 'en' ? <img src={jp} alt="JP" /> : <img src={gb} alt="EN" />}
        </div>
      )}
    </Lang.Consumer>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface LanguageButtonProps {
  className?: string,
  callback: React.Dispatch<React.SetStateAction<LangCode>>
}
