import 'styles/Playlist.scss'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
import { Lang } from 'App'
import { text } from 'data/text'
import cocoDream from 'images/coco_dream.gif'
import cocoDreamWebp from 'images/coco_dream.webp'

export function Playlist () {
  return (
    <div id="playlist-section">
      <div id="playlist-video-wrapper">
        <FadeInSlideUp innerProps={animationInnerProps} >
          <picture>
            <source type="image/webp" srcSet={cocoDreamWebp} />
            <img src={cocoDream} alt="" />
          </picture>
          <Lang.Consumer>
            {lang => <span>{text.playlist.himeCocoPlaylist[lang]}</span>}
          </Lang.Consumer>
        </FadeInSlideUp>
        <div id="playlist-iframe">
          <div id="video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

const animationInnerProps = {id: 'playlist-title'};
