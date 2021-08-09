import { FadeInSlideUp } from 'components/IntersectionAnimator'
import { messages } from 'data/messages'
import 'styles/Messages.scss'
import chibiYonkisei from 'images/chibi_yonkisei.png'
import Masonry from 'react-masonry-css'
import { Lang } from 'App'
import { text } from 'data/text'
import { insertEveryN } from 'utils/general'
import { SourcedImage } from 'components/SourcedImage'
import { messageImages as images } from 'data/messageImages'

export function Messages () {
  return (
    <section id="messages">
      <Title />
      <Masonry
        breakpointCols={{default: 3, 1200: 2, 850: 1}}
        className="messages-list"
        columnClassName="messages-column"
      >
        {imageAndMessageEls}
      </Masonry>
    </section>
  )
}

///////////////////////////////////////////////////////////////////////////////

function Title () {
  return (
    <FadeInSlideUp innerProps={{id: 'messages-title'}} >
      <SourcedImage
        className="title-image"
        src={chibiYonkisei}
        author="colonel_AKI"
        icon={process.env.PUBLIC_URL + '/avatars/ColonelAki.jpg'}
        title="Chibi Hololive #6"
        url="https://www.pixiv.net/en/artworks/84002989"
      />

      <Lang.Consumer>{lang =>(
        <span className="messages-title">
          {text.messages.messagesFromLuknights[lang]}
        </span>
      )}</Lang.Consumer>
    </FadeInSlideUp>
  )
}

function Message ({content, signature, twitterUrl, imageUrl}: MessageProps) {
  return (
    <div className="message">
      <div className="message-content">{content}</div>
      <div className="message-signature">
        {imageUrl &&
          <a href={twitterUrl}>
            <div className="message-icon"><img src={imageUrl} alt="" /></div>
          </a>
        }
        <span>
          {twitterUrl ? <a href={twitterUrl}>{signature}</a> : signature }
        </span>
      </div>
    </div>
  )
}

const imageEls = images.map ((props, i) => (
  <FadeInSlideUp key={i+'img'}>
    <SourcedImage {...props} />
  </FadeInSlideUp>
))

const messageEls = messages.map ((msg, i) => (
  <Message
    content={msg.content.split('\n').map((str, i) => <p key={i}>{str}</p>)}
    signature={msg.signature}
    imageUrl={msg.imageUrl}
    twitterUrl={msg.twitterUrl}
    key={i}
  />
))

const imageAndMessageEls = [
  ...messageEls.slice (0, 4),
  ...insertEveryN (6, messageEls.slice (4), imageEls)
]


interface MessageProps {
  content: string | JSX.Element[],
  signature: string,
  imageUrl?: string,
  twitterUrl?: string
}
