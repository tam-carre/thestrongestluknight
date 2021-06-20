import { LanguageCode } from 'data/text'
import { Lang } from 'App'
import 'styles/LanguageButton.scss'

export function LanguageButton ({className, callback}: LanguageButtonProps) {
  const toggleLang = (current: LanguageCode) => {
    const newLang = current === 'en' ? 'jp'
                                     : 'en'
    callback (newLang)
  }
  return (
    <Lang.Consumer>
      {lang => (
        <div
          id="language-switcher"
          className={className ?? ''}
          onClick={() => toggleLang (lang)}
        >
          {lang === 'en' ? '\u{1F1EF}\u{1F1F5}' : '\u{1F1EC}\u{1F1E7}'}
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
