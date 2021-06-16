import { Contributor, credits } from 'data/credits'
import 'styles/Credits.scss'
import 'images/coco_looking_at_horizon.png'
import { configs, anims } from 'utils/springs'
import { IntersectionAnimator } from 'components/IntersectionAnimator'
// import { importImages } from 'utils/general'
// const images = importImages ('../images/avatars')

export function Credits () {
  return (<div id="credit-wrapper">
    <IntersectionAnimator
      threshold={1}
      inViewAnimation={anims.fadeInSlideUp}
      notInViewAnimation={anims.fadeOutSlideDown}
      config={configs.shortEaseOut}
      innerProps={{id: 'credits-title'}}
    >
      Credits
    </IntersectionAnimator>
    

    <div id="credits">
      {credits
        .map ((cont, cat) => <Credit category={cat} content={cont} />)
        .toList ()}
    </div>

    <div id="coco-looking-at-horizon"></div>
  </div>)
}

///////////////////////////////////////////////////////////////////////////////

interface CreditProps {
  category: string,
  content: Contributor[],
}

function Credit ({category, content}: CreditProps) {
  return (
    <IntersectionAnimator
      threshold={.4}
      inViewAnimation={anims.fadeInSlideUp}
      notInViewAnimation={anims.fadeOutSlideDown}
      config={configs.shortEaseOut}
      innerProps={{className: 'credit-block'}}
    >
      <div className="credit-category">{category}</div>

      {content.map (credit => (
        <div className="credit-one-person">
          <div className="credit-name">
            {credit.url ? <a href={credit.url}>
                            {credit.icon &&
                              <div className="credit-avatar">
                                <img src={process.env.PUBLIC_URL + credit.icon} alt="" />
                              </div>
                            }
                            {credit.name}
                          </a>
                        : credit.name}
          </div>
          {credit.details &&
            <div className="credit-details">{credit.details}</div>
          }

          {credit.artworks && credit.artworks.length > 0 &&
            <div className="credit-artworks">
              {credit.artworks!.map (artwork => (
                <div className="credit-artwork">
                  <a href={artwork.url}>{artwork.title}</a>
                </div>
              ))}
            </div>
          }
        </div>
      ))}
  </IntersectionAnimator>
  )
}
