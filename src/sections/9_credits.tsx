import { credits } from '../data/credits'
import '../styles/9_credits.scss'
import '../images/coco_looking_at_horizon.png'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { shortEaseOut } from 'utils/springs'

export function Credits () {
  const [ref, inView] = useInView ({ threshold: 1 })
  const slideUp = useSpring ({
    from: inView ? {opacity: 1, transform: "translateY(0px)"} : { opacity: 0, transform: "translateY(50px)" },
    to: inView ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(50px)" },
    config: shortEaseOut
  })

  return (
    <>
      <animated.div id="credits-title" ref={ref} style={slideUp}>
        Credits
      </animated.div>
      <div id="credits">
        {credits.map ((categoryContent, categoryName) => (
          <animated.div className="credit-block" style={slideUp}>
            <div className="credit-category">{categoryName}</div>

            {categoryContent.map (credit => (
              <div className="credit-one-person">
                <div className="credit-name">
                  {credit.imageUrl
                    ? <div className="credit-avatar">
                      <img src={credit.imageUrl} alt="" />
                    </div>
                    : ''}
                  {credit.url
                    ? <a href={credit.url}>{credit.name}</a>
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
        )).toList ()}

      </div>

      <div id="coco-looking-at-horizon">
      </div>
    </>
  )
}
