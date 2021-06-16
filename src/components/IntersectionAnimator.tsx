import { useInView } from "react-intersection-observer"
import { SpringConfig } from "react-spring";
import { useSpring, animated } from "react-spring";
import { anims } from "../utils/springs"; 

type Animation = typeof anims[keyof typeof anims];

type IntersectionAnimatorProps = {
    children: React.ReactNode;
    threshold?: number,
    inViewAnimation:  Animation,
    notInViewAnimation: Animation,
    config?: SpringConfig | ((key: string) => SpringConfig),
    innerProps?: React.HTMLAttributes<HTMLDivElement>
}

export const IntersectionAnimator = (props: IntersectionAnimatorProps) => {
    const { threshold = 1, innerProps = {} } = props;
    const [animationWrapper, isAnimationWrapperInView] = useInView ({ threshold });
    const animation = useSpring ({
        ...(isAnimationWrapperInView ? props.inViewAnimation : props.notInViewAnimation),
        config: props.config,
    });

    return <div className="animationWrapper" ref={animationWrapper}>
        <animated.div {...innerProps} style={animation} >
            {props.children}
        </animated.div>
    </div>
}
