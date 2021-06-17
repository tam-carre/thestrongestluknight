import * as React from 'react';


interface ScrollNotifierProps {
    /** 
     * The threshold for when we should start returning true. E.g. a threshold of 50 means
     * we start calling true when the item is 50px from the top of the page
     * defaults to 0
     */
    threshold?: number,
    /** 
     * The threshold for when we should start returning false. E.g. a threshold of 50 means
     * we start calling false when the bottom of item is 50px from the top of the page
     * defaults to 0
     */
    bottomThreshold?: number,
    /**
     * If true, we will not send a callback when we scroll past the item
     * 
     */
    ignoreBottom?: boolean,
    /**
     * Callback which will be given true if the item is within the specified thresholds and false otherwise.
     */
    callback: (inPosition: boolean) => void,
    children: React.ReactNode,
}

export const ScrollNotifier = ({ 
    children, 
    threshold = 0,
    bottomThreshold = 0, 
    ignoreBottom=false,
    callback 
}: ScrollNotifierProps) => {
    const ref= React.useRef<HTMLDivElement>(null);
    const onTop = React.useRef<boolean | undefined>(undefined);
  
    const handleScroll = () => {
      const measurements = ref.current && ref.current.getBoundingClientRect();
      if (!measurements) {
        return;
      }

      console.log(measurements.top <= threshold, measurements.top + measurements.height < bottomThreshold)
      if (
        measurements.top <= threshold &&
        (ignoreBottom || measurements.top + measurements.height > bottomThreshold)
      ) {
        if (!onTop.current) {
          callback(true);
          onTop.current = true;
        }
      } else {
        if (onTop.current || onTop.current === undefined) {
          callback(false);
          onTop.current = false;
        }
      }
    };
  
    // React.usEffect with empty dependency array is close enough to componentDidMount and 
    // componentWillUnmount for our purposes
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div ref={ref}>
        {children}
      </div>
    );
  };
  