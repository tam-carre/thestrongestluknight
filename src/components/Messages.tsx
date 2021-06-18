import { configs, anims } from 'utils/springs'
import { IntersectionAnimator } from 'components/IntersectionAnimator'
import { messages } from 'data/messages'
import 'styles/Messages.scss'

export function Messages () {
  return (
    <div id="messages">
      {messages.map ((msg, i) => (
        <Message
          content={msg.content}
          signature={msg.signature}
          imageUrl={msg.imageUrl}
          key={i}
        />
      ))}
    </div>
  )
}

///////////////////////////////////////////////////////////////////////////////

interface MessageProps {
  content: string,
  signature: string,
  imageUrl?: string
}

function Message ({content, signature, imageUrl = undefined}: MessageProps) {
  return (
    <IntersectionAnimator
      threshold={.4}
      inViewAnimation={anims.fadeInSlideUp}
      notInViewAnimation={anims.fadeOutSlideDown}
      config={configs.shortEaseOut}
      innerProps={{className: 'message'}}
    >
      <div className="message-content">{content}</div>
      
      <div className="message-signature">
        {imageUrl &&
          <div className="message-icon"><img src={imageUrl} alt="" /></div>
        }
        {signature}
      </div>
    </IntersectionAnimator>
  )
}
