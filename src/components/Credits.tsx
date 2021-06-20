import { Contributor, credits } from 'data/credits'
import 'styles/Credits.scss'
import 'images/coco_looking_at_horizon.png'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
// import dragonTail from 'images/dragon_tail.png'
import combinedEmoji from 'images/message_images/combined_emoji.png'

const creditList = credits
  .map ((cont, cat) => <Credit key={cat} category={cat} content={cont} />)
  .toList ();

const innerCreditProps = { id: 'credits-title' };

export function Credits () {
  return (
  <div id="credit-wrapper">
    <FadeInSlideUp threshold={.8} innerProps={innerCreditProps} >
      <img src={combinedEmoji} alt="" />
      <span>Credits</span>
    </FadeInSlideUp>
    
    <div id="credits">
      {creditList}
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
    <div className="credit-block">
    {/*<FadeInSlideUp innerProps={{className: 'credit-block'}} >*/}
      <div className="credit-category">{category}</div>

      {content.map ((credit, i) => (
        <div className="credit-one-person" key={i}>
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
              {credit.artworks!.map (({url, title}) => (
                <div className="credit-artwork" key={url}>
                  <a href={url}>{title}</a>
                </div>
              ))}
            </div>
          }
        </div>
      ))}
    {/*</FadeInSlideUp>*/}
    </div>
  )
}
