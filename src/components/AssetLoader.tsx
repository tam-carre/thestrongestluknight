import { useState, useEffect } from "react"

export enum LoadStatus {
  PENDING,
  SUCCESS,
  FAILED,
}

export function AssetLoader (props: AssetLoaderProps)  {
  const [loads, setLoads] = useState <Record<href, boolean | undefined>> ({})
  const [links, setLinks] = useState <JSX.Element[]> ([])

  useEffect (() => {
    const assetStatuses = Object.fromEntries (
       props.assets.map (asset => [asset.href, undefined])
    )

    const links = props.assets.map (({href, as}) => <link
      rel="preload"
      href={href}
      as={as}
      key={href}
      onLoad={() => setLoads (prevState => ({ ...prevState, [href]: true,  }))}
      onError={() => setLoads (prevState => ({ ...prevState, [href]: false, }))}
    />)

    setLoads (assetStatuses)
    setLinks (links)

  }, [props.assets])

  const loadedStates = Object.values (loads ?? {})
  const isPending    = loadedStates.some  (loaded => loaded === undefined)
  const isSuccess    = loadedStates.every (loaded => loaded === true)

  const loadStatus   = isPending ? LoadStatus.PENDING
                     : isSuccess ? LoadStatus.SUCCESS
                                 : LoadStatus.FAILED

  return <> {links} {props.children (loadStatus)} </>
}

export type AssetLoaderProps = {
  assets: Array<{
    as:string,
    href: string,
  }>,
  children: (status: LoadStatus) => React.ReactNode
}

///////////////////////////////////////////////////////////////////////////////

type href = string
