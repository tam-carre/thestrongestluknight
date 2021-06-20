import { LanguageCode } from 'data/text'
import 'styles/LanguageButton.scss'

export function LanguageButton ({className, callback}: LanguageButtonProps) {
  const toggleLang = (current: LanguageCode) => {
    const newLang = current === 'en' ? 'jp'
                                     : 'en'
    callback (newLang)
  }
  return (
    <div id="language-switcher" className={className ?? ''}>
      🇯🇵
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface LanguageButtonProps {
  className?: string,
  callback: React.Dispatch<React.SetStateAction<string>>
}
