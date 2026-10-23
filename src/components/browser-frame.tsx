import Image from 'next/image'

interface BrowserFrameProps {
  url: string
  src: string
  alt: string
  sizes: string
  ratio?: string
  priority?: boolean
}

export function BrowserFrame({
  url,
  src,
  alt,
  sizes,
  ratio,
  priority,
}: BrowserFrameProps) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-url">{url}</span>
      </div>
      <div
        className="browser-shot"
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    </div>
  )
}
