import 'styles/Playlist.scss'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
import cocoDream from 'images/coco_dream.gif'

export function Playlist () {
  return (
    <div id="playlist-section">
      <div id="playlist-video-wrapper">
        <FadeInSlideUp innerProps={{id: 'playlist-title'}} >
        <img src={cocoDream} alt="" />
          <span>HimeCoco playlist</span>
        </FadeInSlideUp>
        {/*<FadeInSlideUp innerProps={{id: 'playlist-iframe'}}>*/}
        <div id="playlist-iframe">
          <div id="video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        {/*</FadeInSlideUp>*/}
      </div>
    </div>
  )
}
