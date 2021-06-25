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
import cocoTatoo from 'images/message_images/coco_with_luna_back_tatoo.png'
import comfyLuna2 from 'images/message_images/comfy_luna.png'
import comfyCoco2 from 'images/message_images/comfy_coco.png'
import dragon from 'images/message_images/pixart_dragon.png'
import undertale from 'images/message_images/pixart_undertale_coco.png'
import { SourcedImage, SourcedImageProps } from 'components/SourcedImage'

const images: SourcedImageProps[] = [
  {src: runningCoco, author: 'エニモ', title: 'ほろふぉーす愛', url: 'https://www.pixiv.net/en/artworks/89232325', icon: process.env.PUBLIC_URL + '/avatars/ANYMORE_vvv.jpg',},
  {src: runningLuna, author: 'エニモ', title: 'ほろふぉーす愛', url: 'https://www.pixiv.net/en/artworks/89232325', icon: process.env.PUBLIC_URL + '/avatars/ANYMORE_vvv.jpg'},
  {src: cocoTatoo, author: 'mop', title: 'どこの組のもんじゃい？', url: 'https://www.pixiv.net/en/users/2083795', icon: process.env.PUBLIC_URL + '/avatars/mop.png'
  },
  {src: pixartLuna, author: '銀鏡にと', title: '4期生アイドル衣装', url: 'https://www.pixiv.net/en/artworks/88113908',
    icon: process.env.PUBLIC_URL + '/avatars/shiromi_nito.jpg',
  },
  {src: comfyLuna, author: 'Yuusachii', title: 'Cozy Gen 4', url: 'https://www.pixiv.net/en/artworks/89126212',
      icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  },
  {src: comfyCoco, author: 'Yuusachii', title: 'Cozy Gen 4', url: 'https://www.pixiv.net/en/artworks/89126212',
      icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg',
  },
  {src: pixartCoco, author: '銀鏡にと', title: '4期生アイドル衣装', url: 'https://www.pixiv.net/en/artworks/89232325',
    icon: process.env.PUBLIC_URL + '/avatars/shiromi_nito.jpg',
  },
  {src: comfyLuna2, author: 'Yuusachii', title: 'New Year Hololive Gen4 Comfy', url: 'https://www.pixiv.net/en/artworks/86730174', icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg', },
  {src: comfyCoco2, author: 'Yuusachii', title: 'New Year Hololive Gen4 Comfy', url: 'https://www.pixiv.net/en/artworks/86730174', icon: process.env.PUBLIC_URL + '/avatars/SachiiHappy.jpg', },
  {src: dragon, author: 'Leonato Ieiri', title: 'Coco pixel art', url: 'https://twitter.com/leonatoieiri/status/1402836379671879680', icon: process.env.PUBLIC_URL + '/avatars/leonatoieiri.jpg', },
  {src: undertale, author: 'Leonato Ieiri', title: 'Coco pixel art', url: 'https://twitter.com/leonatoieiri/status/1402836379671879680', icon: process.env.PUBLIC_URL + '/avatars/leonatoieiri.jpg', },
]

const imageEls = images.map ((props, i) => (
  <FadeInSlideUp key={i+'img'}>
    <SourcedImage {...props} />
  </FadeInSlideUp>
))


const messageEls = messages.map ((msg, i) => (
  <Message
    content={msg.content.split('\n')
      .map((str, i) => <p key={i}>{str}</p>)}
    signature={msg.signature}
    imageUrl={msg.imageUrl}
    twitterUrl={msg.twitterUrl}
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
      <div id="messages-container">
      <FadeInSlideUp innerProps={messageInnerProps} >
        <SourcedImage
          className="title-image"
          src={chibiYonkisei}
          author="colonel_AKI"
          icon={process.env.PUBLIC_URL + '/avatars/ColonelAki.jpg'}
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
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface MessageProps {
  content: string | JSX.Element[],
  signature: string,
  imageUrl?: string,
  twitterUrl?: string
}

function Message ({content, signature, twitterUrl= undefined, imageUrl = undefined}: MessageProps) {
  const signatureEl = twitterUrl
    ? <a href={twitterUrl}>{signature}</a>
    : signature

  return (
    <div className="message">
      <div className="message-content">{content}</div>
      
      <div className="message-signature">
        {imageUrl &&
          <a href={twitterUrl}>
            <div className="message-icon"><img src={imageUrl} alt="" /></div>
          </a>
        }
        <span>{signatureEl}</span>
      </div>
    </div>
  )
}
