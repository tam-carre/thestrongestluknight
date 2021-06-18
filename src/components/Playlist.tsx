import 'styles/Playlist.scss'
import { IntersectionAnimator } from 'components/IntersectionAnimator'
import { configs, anims } from 'utils/springs'

export function Playlist (props: { className?: string}) {
  return (
    <div id="playlist" className={props.className ?? ''}>
      <div id="playlist-introduction">
        <div>
          Hey Kaichou, we Luknights want you to know that everyone is going to miss you dearly.
        </div>
        <IntersectionAnimator
          threshold={.3}
          inViewAnimation={anims.fadeInSlideUp}
          notInViewAnimation={anims.fadeOutSlideDown}
          config={configs.shortEaseOut}
          innerProps={{id: 'playlist-introduction-paragraph-2'}}
        >
            Here's our HimeCoco playlist so everyone, including you, can remember the good times—and just a little further down, you can read everyone's parting words for you.
        </IntersectionAnimator>
      </div>
    </div>
  )
}
