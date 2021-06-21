import { FadeInSlideUp } from 'components/IntersectionAnimator'
import { messages } from 'data/messages'
import 'styles/Messages.scss'
import chibiYonkisei from 'images/chibi_yonkisei.png'
import Masonry from 'react-masonry-css'
import { Lang } from 'App'
import { text } from 'data/text'
import { insertEveryN } from 'utils/general'
import runningLuna from 'images/message_images/running_luna.png'
import comfyCoco from 'images/message_images/comfy_coco2.png'
import runningCoco from 'images/message_images/running_coco.png'
// import comfyKanata from 'images/message_images/comfy_kanata.png'
import comfyLuna from 'images/message_images/comfy_luna2.png'
import pixartCoco from 'images/message_images/pixart_coco.png'
import pixartLuna from 'images/message_images/pixart_luna.png'
import { SourcedImage, SourcedImageProps } from 'components/SourcedImage'

const images: SourcedImageProps[] = [
  {id: 'tip0', src: runningCoco, author: 'エニモ', title: 'ほろふぉーす愛', url: 'https://www.pixiv.net/en/artworks/89232325'},
  {id: 'tip1', src: runningLuna, author: 'エニモ', title: 'ほろふぉーす愛', url: 'https://www.pixiv.net/en/artworks/89232325'},
  {id: 'tip2', src: pixartLuna, author: '銀鏡にと', title: '4期生アイドル衣装', url: 'https://www.pixiv.net/en/artworks/88113908'},
  {id: 'tip3', src: comfyLuna, author: 'Yuusachii', title: 'Cozy Gen 4', url: 'https://www.pixiv.net/en/artworks/89126212'},
  {id: 'tip4', src: comfyCoco, author: 'Yuusachii', title: 'Cozy Gen 4', url: 'https://www.pixiv.net/en/artworks/89126212'},
  {id: 'tip5', src: pixartCoco, author: '銀鏡にと', title: '4期生アイドル衣装', url: 'https://www.pixiv.net/en/artworks/89232325'},
]

const imageEls = images.map ((props, i) => (
  <FadeInSlideUp key={i}>
    <SourcedImage {...props} />
  </FadeInSlideUp>
))


const messageEls = messages.map ((msg, i) => (
  <Message
    content={msg.content.split('\n')
      .map((str, i) => <p key={i}>{str}</p>)}
    signature={msg.signature}
    imageUrl={msg.imageUrl}
    key={i}
  />
))

const allEls = [
  ...messageEls.slice (0, 4),
  ...insertEveryN (6, messageEls.slice (4), imageEls)
]

const messageInnerProps = {id: 'messages-title'};

export function Messages () {
  return (
    <div id="messages">
      <FadeInSlideUp innerProps={messageInnerProps} >
        <SourcedImage
          id="chibi4sei"
          src={chibiYonkisei}
          author="colonel_AKI"
          title="Chibi Hololive #6"
          url="https://www.pixiv.net/en/artworks/84002989"
        />
        <Lang.Consumer>
          {lang => <span className="messages-title">{text.messages.messagesFromLuknights[lang]}</span>}
        </Lang.Consumer>
      </FadeInSlideUp>

      <Masonry
        breakpointCols={{default: 3, 1200: 2, 850: 1}}
        className="messages-list"
        columnClassName="messages-column"
      >
        {allEls}
      </Masonry>
      {/*
      <div id="message-images">
        <Parallax y={[-60, 60]} className="message-image-container comfy-coco">
          <img src={comfyCoco} alt="" />
        </Parallax>
      </div>
      */}
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface MessageProps {
  content: string | JSX.Element[],
  signature: string,
  imageUrl?: string
}

function Message ({content, signature, imageUrl = undefined}: MessageProps) {
  const signatureEl = signature.startsWith('@')
    ? <a href={'https://twitter.com/' + signature.substr(1)}>{signature}</a>
    : signature

  return (
    <div className="message">
      <div className="message-content">{content}</div>
      
      <div className="message-signature">
        {imageUrl &&
          <div className="message-icon"><img src={imageUrl} alt="" /></div>
        }
        <span>{signatureEl}</span>
      </div>
    </div>
  )
}
