import { useRef, useEffect } from 'react'

export function ScrollNotifier ({
  children, callback, threshold = 0, bottomThreshold = 0
}: ScrollNotifierProps) {
  const watchedElRef = useRef <HTMLDivElement | null> (null)
  const isAtTop      = useRef <boolean | undefined>   (undefined)

  useEffect (() => {
    const handleScroll = () => {
      if (watchedElRef.current == null) return
      const { top, height } = watchedElRef.current!.getBoundingClientRect ()
      const isNotTooFarUp   = top + height >= bottomThreshold
      const hasBecomeAtTop  = top <= threshold && isNotTooFarUp

      if (hasBecomeAtTop !== isAtTop.current) {
        callback (hasBecomeAtTop)
        isAtTop.current = hasBecomeAtTop
      }
    }

    handleScroll ()
    window.addEventListener ('scroll', handleScroll)

    return () => window.removeEventListener ('scroll', handleScroll)
  }, [callback, threshold, bottomThreshold])

  return <div ref={watchedElRef}> {children} </div>
}

///////////////////////////////////////////////////////////////////////////////

interface ScrollNotifierProps {
  /** 50 => calls true when el is 50px below page top. Default: 0 */
  threshold?: number,

  /** 50 => calls false when el's bottom is 50px above page top. Default: 0 */
  bottomThreshold?: number,

  /** Callback which is passed true when el is within specified thresholds */
  callback: (inPosition: boolean) => void,

  children: React.ReactNode
}
