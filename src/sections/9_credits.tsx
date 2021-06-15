import { Contributor, credits } from '../data/credits'
import '../styles/9_credits.scss'
import '../images/coco_looking_at_horizon.png'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { configs, anims } from 'utils/springs'

export function Credits () {
  const [title, inViewTitle]          = useInView ({ threshold: 1 })

  const slideUpTitle = useSpring ({
    ...(inViewTitle ? anims.fadeInSlideUp : anims.fadeOutSlideDown),
    config: configs.shortEaseOut
  })

  return (<>
    <animated.div id="credits-title" ref={title} style={slideUpTitle}>
      Credits
    </animated.div>
    <animated.div id="credits">
      {credits.map ((content, category) =>
      <CreditBlock categoryContent={content} categoryName={category}/>
                   ).toList ()}

    </animated.div>

    <div id="coco-looking-at-horizon">
    </div>
  </>)
}

///////////////////////////////////////////////////////////////////////////////

interface CreditBlockProps {
  categoryContent: Contributor[],
  categoryName: string
}

function CreditBlock ({categoryContent, categoryName}: CreditBlockProps) {
  const [ref, inView] = useInView ({ threshold: 0 })
  const slideUpCredits = useSpring ({
    ...(inView ? anims.fadeInSlideUp : anims.fadeOutSlideDown),
    config: configs.shortEaseOut
  })
  return (
    <animated.div
      className="credit-block"
      ref={ref}
      style={slideUpCredits}
    >
      <div className="credit-category">{categoryName}</div>

      {categoryContent.map (credit => (
        <div className="credit-one-person">
          <div className="credit-name">
            {credit.url
              ? <a href={credit.url}>
                {credit.imageUrl
                  ? <div className="credit-avatar">
                    {/* <img src={credit.imageUrl} alt="" /> */}
                  </div>
                  : ''}
                {credit.name}
              </a>
              : credit.name}
          </div>
          {credit.details
            ? <div className="credit-details">{credit.details}</div>
            : ''}

          {credit.artworks && credit.artworks.length > 0
            ? <div className="credit-artworks">
              {credit.artworks!.map (artwork => (
                <div className="credit-artwork">
                  <a href={artwork.url}>{artwork.title}</a>
                </div>
              ))}
            </div>
            : ''}
        </div>
      ))}

    </animated.div>
  )
}

