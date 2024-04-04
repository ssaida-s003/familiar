import React, { useEffect, useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'

type Slide = {
  key: string | number
  content: React.ReactNode
}

interface CustomCarouselProps {
  key: number
  cards: Slide[]
  width: string
  height: string
  margin: string
  offset: number
  showArrows: boolean
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ cards, width, height, margin, offset, showArrows }) => {
  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState<number>(offset)
  const [showArrowsConfig, setShowArrowsConfig] = useState<boolean>(showArrows)
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined)
  const [elements] = useState<Slide[]>(table)

  useEffect(() => {
    setOffsetRadius(offset)
    setShowArrowsConfig(showArrows)
  }, [offset, showArrowsConfig])

  return (
    <div style={{ width, height, margin }}>
      <Carousel slides={elements} goToSlide={goToSlide} offsetRadius={offsetRadius} showNavigation={showArrows} animationConfig={config.gentle} />
    </div>
  )
}

export default CustomCarousel
