import { useInView } from "react-intersection-observer"
import { SpringConfig } from "react-spring"
import { Animation } from "../utils/springs"
import { configs, anims } from 'utils/springs'
import { CSSProperties } from "react"

export function IntersectionAnimator (props: IntersectionAnimatorProps) {
  const { threshold = 1, innerProps = {} }  = props
  const [animationWrapper, isWrapperInView] = useInView ({ threshold })
  const animation: CSSProperties = {
    position: 'relative', transition: '1s',
    top: isWrapperInView ? '0px' : '25px',
    opacity: isWrapperInView ? 1 : 0
  }

  return (
    <div className="animationWrapper" ref={animationWrapper}>
      <div {...innerProps} style={animation} >
        {props.children}
      </div>
    </div>
  )
}

export function FadeInSlideUp (props: FadeInSlideUpProps) {
  return (
    <IntersectionAnimator
      threshold={props.threshold ?? .4}
      inViewAnimation={anims.fadeInSlideUp}
      notInViewAnimation={anims.fadeOutSlideDown}
      config={configs.shortEaseOut}
      innerProps={props.innerProps}
    >
      {props.children}
    </IntersectionAnimator>
  )
}

///////////////////////////////////////////////////////////////////////////////

type IntersectionAnimatorProps = {
  children: React.ReactNode,
  threshold?: number,
  inViewAnimation: Animation,
  notInViewAnimation: Animation,
  config?: SpringConfig | ((key: string) => SpringConfig),
  innerProps?: React.HTMLAttributes<HTMLDivElement> | undefined
}

type FadeInSlideUpProps = {
  children: React.ReactNode,
  threshold?: number,
  innerProps?: React.HTMLAttributes<HTMLDivElement>
}

