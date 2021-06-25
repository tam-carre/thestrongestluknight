import { LanguageCode } from 'data/text'
import { Lang } from 'App'
import 'styles/LanguageButton.scss'
import jpFlag from 'images/jp.svg'
import gbFlag from 'images/gb.svg'

export function LanguageButton ({className, callback}: LanguageButtonProps) {
  const toggleLang = (current: LanguageCode) => {
    const newLang = current === 'en' ? 'jp'
                                     : 'en'
    callback (newLang)
  }
  const jp = <img src={jpFlag} alt="JP" />
  const en = <img src={gbFlag} alt="EN" />

  return (
    <Lang.Consumer>
      {lang => (
        <div
          id="language-switcher"
          className={className ?? ''}
          onClick={() => toggleLang (lang)}
        >
          {lang === 'en' ? jp : en}
        </div>
      )}
    </Lang.Consumer>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface LanguageButtonProps {
  className?: string,
  callback: React.Dispatch<React.SetStateAction<LanguageCode>>
}
