import { Contributor, credits } from 'data/credits'
import 'styles/Credits.scss'
import 'images/coco_looking_at_horizon.png'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
import combinedEmoji from 'images/combined_emoji.png'
import { Lang } from 'App'
import { text } from 'data/text'

const creditList = credits
  .map ((cont, cat) => <Credit key={cat} category={cat} content={cont} />)
  .toList ();

const innerCreditProps = { id: 'credits-title' };

export function Credits () {
  return (
  <div id="credit-wrapper">
    <FadeInSlideUp threshold={.8} innerProps={innerCreditProps} >
      <img src={combinedEmoji} alt="" />
      <Lang.Consumer>
        {lang => <span>{text.credits.credits[lang]}</span>}
      </Lang.Consumer>
    </FadeInSlideUp>
    
    <div id="credits">
      {creditList}
    </div>

    <div id="coco-looking-at-horizon">
      <div id="related-sites">
        <a href="https://www.reddit.com/r/Hololive/comments/nwvq6t/coco_graduation_project_and_resource_for_others/">Main project</a> <a href="https://www.random-co.co/">Random Coco</a>
      </div>
    </div>
  </div>)
}

///////////////////////////////////////////////////////////////////////////////

interface CreditProps {
  category: string,
  content: Contributor[],
}

function Credit ({category, content}: CreditProps) {
  return (
    <Lang.Consumer>
      {lang => (
        <div className="credit-block">
          <div className="credit-category">
            {text.credits[category][lang]}
          </div>

          {content.map ((credit, i) => (
            <div className="credit-one-person" key={i}>
              <div className="credit-name">
                {credit.url
                  ? <a href={credit.url}>
                      {credit.icon &&
                        <div className="credit-avatar">
                          <img src={credit.icon} alt="" />
                        </div>
                      }
                      {credit.name}
                    </a>
                  : credit.name}
              </div>
              {credit.details &&
                <div className="credit-details">
                  {text.credits[credit.details][lang]}
                </div>
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
        </div>
      )}
    </Lang.Consumer>
  )
}
