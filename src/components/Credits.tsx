import { Contributor, credits } from 'data/credits'
import 'styles/Credits.scss'
import 'images/coco_looking_at_horizon.png'
import { FadeInSlideUp } from 'components/IntersectionAnimator'
import combinedEmoji from 'images/combined_emoji.png'
import { Lang } from 'App'
import { text } from 'data/text'


export function Credits () {
  return (
    <footer id="credits">
      <Title />
      <CreditList />
      <BackgroundAndRelatedSites />
    </footer>
  )
}

///////////////////////////////////////////////////////////////////////////////

function Title () {
  return (
    <FadeInSlideUp threshold={.8} innerProps={{id: 'credits-title'}} >
      <img src={combinedEmoji} alt="" />
      <Lang.Consumer>
        {lang => <span>{text.credits.credits[lang]}</span>}
      </Lang.Consumer>
    </FadeInSlideUp>
  )
}

function CreditList () {
  return (
    <div id="credit-list">
      {credits
        .map ((cont, cat) => <Credit key={cat} category={cat} content={cont} />)
        .toList ()}
    </div>
  )
}

function BackgroundAndRelatedSites () {
  return (
    <div id="footer-background">
      <div id="related-sites">
        <a href="https://nextme.me">Main project</a>
        <a href="https://www.random-co.co/">Random Coco</a>
        <a href="https://arigathanks.manotomo.com/home">MASS</a>
        <a href="https://kcgp.tw/en">2D2C</a>
      </div>
    </div>
  )
}

function Credit ({category, content}: CreditProps) {
  return (
    <Lang.Consumer>{lang => (
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
    )}</Lang.Consumer>
  )
}

interface CreditProps {
  category: string,
  content: Contributor[],
}
