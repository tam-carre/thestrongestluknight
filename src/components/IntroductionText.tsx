import 'styles/IntroductionText.scss'
import { FadeInSlideUp } from 'components/IntersectionAnimator'

export function IntroductionText (props: { className?: string}) {
  return (
    <div id="playlist-introduction-wrapper" className={props.className ?? ''}>
      <div id="intro-strip-under-nav"></div>
      <div id="playlist-introduction">
        <div>
          Hey Kaichou, we Luknights want you to know that everyone is going to miss you dearly.
        </div>
        <FadeInSlideUp innerProps={{id: 'playlist-introduction-paragraph-2'}} >
            Here's our HimeCoco playlist so all of us, you included, can remember the good times—and just a little further down, you can read everyone's parting words for you.
        </FadeInSlideUp>
      </div>
    </div>
  )
}
