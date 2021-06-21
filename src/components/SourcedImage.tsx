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
    <img data-tip src={src} alt="" data-for={id} />
    <ReactTooltip effect="solid" type="warning" id={id}>
      <span className="tooltip-text">{title+' — '+author}</span>
    </ReactTooltip>
  </>
  return url ? <a href={url}>{image}</a> : image
}
