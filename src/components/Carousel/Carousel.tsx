import React, { useState, useRef } from 'react'
import './Carousel.scss'

interface CarouselProps {
  children: React.ReactNode[]
  itemsPerView?: number
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsPerView = 4 }) => {
  const [idx, setIdx] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const max = Math.max(0, children.length - itemsPerView)

  const go = (next: number) => {
    const clamped = Math.max(0, Math.min(next, max))
    setIdx(clamped)
    if (ref.current) {
      const slide = ref.current.querySelector<HTMLElement>('.carousel__slide')
      if (slide) {
        const gap = 16
        ref.current.style.transform = `translateX(-${clamped * (slide.offsetWidth + gap)}px)`
      }
    }
  }

  return (
    <div className="carousel" role="region" aria-label="Carrossel de produtos">
      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={() => go(idx - 1)}
        disabled={idx === 0}
        aria-label="Anterior"
      >
        &#8249;
      </button>

      <div className="carousel__viewport">
        <div className="carousel__track" ref={ref}>
          {children.map((child, i) => (
            <div key={i} className="carousel__slide">
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={() => go(idx + 1)}
        disabled={idx >= max}
        aria-label="Próximo"
      >
        &#8250;
      </button>
    </div>
  )
}

export default Carousel
