import ReactTooltip from 'react-tooltip'

export interface SourcedImageProps {
  id: string,
  src: string,
  author: string,
  title: string,
  url?: string
}

export function SourcedImage (props: SourcedImageProps) {
  const { id, src, author, title, url } = props
  const image = <>
    <img data-tip={title+' — '+author} src={src} alt="" data-for={id} />
    <ReactTooltip effect="solid" type="warning" id={id} />
  </>
  return url ? <a href={url}>{image}</a> : image
}
