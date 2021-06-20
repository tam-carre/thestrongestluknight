import { useInView } from "react-intersection-observer"
import { SpringConfig } from "react-spring"
import { useSpring, animated } from "react-spring"
import { Animation } from "../utils/springs"
import { configs, anims } from 'utils/springs'

export function IntersectionAnimator (props: IntersectionAnimatorProps) {
  const { threshold = 1, innerProps = {} }  = props
  const [animationWrapper, isWrapperInView] = useInView ({ threshold })
  const animation = useSpring ({
    ...(isWrapperInView ? props.inViewAnimation : props.notInViewAnimation),
    config: props.config,
  })

  return (
    <div className="animationWrapper" ref={animationWrapper}>
      <animated.div {...innerProps} style={animation} >
        {props.children}
      </animated.div>
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

