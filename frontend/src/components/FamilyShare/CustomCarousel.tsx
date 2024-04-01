import React, { useEffect, useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'

type Slide = {
  key: string | number
  content: React.ReactNode
}

interface CustomCarouselProps {
  cards: Slide[]
  width: string
  height: string
  margin: string
  offset: number
  showArrows: boolean
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ cards, width, height, margin, offset, showArrows }) => {
  const table = cards.map((element, index) => ({
    ...element,
    onClick: () => setGoToSlide(index),
  }))

  const [offsetRadius, setOffsetRadius] = useState<number>(offset)
  const [showArrowsState, setShowArrows] = useState<boolean>(showArrows)
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined)
  const [cardsState] = useState<Slide[]>(table)

  useEffect(() => {
    setOffsetRadius(offset)
    setShowArrows(showArrows)
  }, [offset, showArrows])

  return (
    <div style={{ width, height, margin }}>
      <Carousel
        slides={cardsState}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrowsState}
        animationConfig={config.gentle}
      />
    </div>
  )
}

export default CustomCarousel