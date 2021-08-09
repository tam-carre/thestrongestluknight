import 'styles/Playlist.scss'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
import { Lang } from 'App'
import { text } from 'data/text'
import cocoDream from 'images/coco_dream.gif'
import cocoDreamWebp from 'images/coco_dream.webp'
import { SourcedImage } from 'components/SourcedImage'

export function Playlist () {
  return (
    <section id="playlist">
      <Title />
      <ResponsiveYoutubeVideo />
    </section>
  )
}

///////////////////////////////////////////////////////////////////////////////

function Title () {
  return (
    <FadeInSlideUp innerProps={{id: 'playlist-title'}} >
      <SourcedImage title="coco dream" author="Razlonard" >
        <picture>
          <source type="image/webp" srcSet={cocoDreamWebp} />
          <img src={cocoDream} alt="" />
        </picture>
      </SourcedImage>

      <Lang.Consumer>{lang => (
        <span className="pl-title">{text.playlist.himeCocoPlaylist[lang]}</span>
      )}</Lang.Consumer>
    </FadeInSlideUp>
  )
}

function ResponsiveYoutubeVideo () {
  return (
    <div className="responsive-video-wrapper">
      <div className="responsive-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}
