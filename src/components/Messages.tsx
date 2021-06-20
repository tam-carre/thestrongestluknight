import { FadeInSlideUp } from 'components/IntersectionAnimator'
import { messages } from 'data/messages'
import 'styles/Messages.scss'
import chibiYonkisei from 'images/chibi_yonkisei.png'
import Masonry from 'react-masonry-css'
import { Parallax } from 'react-scroll-parallax'
import { insertEveryN } from 'utils/general'
import runningLuna from 'images/message_images/running_luna.png'
import comfyCoco from 'images/message_images/comfy_coco2.png'
import runningCoco from 'images/message_images/running_coco.png'
// import comfyKanata from 'images/message_images/comfy_kanata.png'
import comfyLuna from 'images/message_images/comfy_luna2.png'
import pixartCoco from 'images/message_images/pixart_coco.png'
import pixartLuna from 'images/message_images/pixart_luna.png'


const images = [
  runningCoco,
  runningLuna,
  pixartLuna,
  comfyLuna,
  comfyCoco,
  pixartCoco,
]

const imageEls = images.map (src => (
  <FadeInSlideUp key={src}>
    <img src={src} alt=""/>
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
        <img src={chibiYonkisei} alt="" />
        <span>Messages from Luknights</span>
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
