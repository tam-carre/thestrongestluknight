import { ReactNode } from 'react'
import 'styles/SourcedImage.scss'

export interface SourcedImageProps {
  author: string,
  title: string,
  src?: string,
  icon?: string,
  url?: string,
  children?: ReactNode
  className?: string
}

export function SourcedImage (props: SourcedImageProps) {
  const { src, author, title, url, icon, children } = props
  const avatar = icon ? <img className="avatar" src={icon} alt="" /> : ' — '
  const image = (
    <div className="item-with-tooltip">
      {src ? <img className="sourced-img" src={src} alt="" /> : children}
      <div className="tooltip-container">
        <span className="tooltip-text">{title}{avatar}{author}</span>
        <div className="arrow-down"></div>
      </div>
    </div>
  )
  return url ? <a href={url}>{image}</a> : image
}
