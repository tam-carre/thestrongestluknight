import { useRef, useEffect } from 'react'

export function ScrollNotifier ({
  children, callback, threshold = 45, el: element, id, tag: Wrapper = 'div',
  className = ''
}: ScrollNotifierProps) {
  const watchedElRef = useRef <HTMLDivElement | null> (null)
  const isAtTop      = useRef <boolean | undefined>   (undefined)
  const watcher      = element ?? window

  useEffect (() => {
    const handleScroll = () => {
      if (watchedElRef.current == null) return
      const { top, height } = watchedElRef?.current!.getBoundingClientRect ()
      const isNotTooFarUp   = top + height >= 0
      const hasBecomeAtTop  = top <= threshold && isNotTooFarUp

      if (hasBecomeAtTop !== isAtTop.current) {
        callback (hasBecomeAtTop)
        isAtTop.current = hasBecomeAtTop
      }
    }

    handleScroll ()
    watcher.addEventListener ('scroll', handleScroll)

    return () => watcher.removeEventListener ('scroll', handleScroll)
  }, [callback, threshold, watcher, isAtTop])

  return (
    <Wrapper ref={watchedElRef} id={id} className={className}>
      {children}
    </Wrapper>
  )
    
}

///////////////////////////////////////////////////////////////////////////////

interface ScrollNotifierProps {
  /** 50 => calls true when el is 50px below page top. Default: 0 */
  threshold?: number,

  /** 50 => calls false when el's bottom is 50px above page top. Default: 0 */
  // bottomThreshold?: number,

  /** Callback which is passed true when el is within specified thresholds */
  callback: (inPosition: boolean) => void,

  /** Scroll element to listen to */
  el?: HTMLElement | Window | null,

  tag?: 'div' | 'section' | 'main' | 'footer' | 'header',
  children?: React.ReactNode
  id?: string
  className?: string
}
