import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CanvasStyled = styled.canvas`
  width: 45%;
`

interface Position {
  x: number
  y: number
}

interface ImageCanvasProps {
  imageUrl: string
  content: string
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ imageUrl, content }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [textPosition, setTextPosition] = useState<Position>({ x: 50, y: 50 })
  const textContent = content
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (ctx) {
      const image = new Image()
      image.src = imageUrl
      image.onload = () => {
        if (canvas) {
          canvas.width = image.width
          canvas.height = image.height
          ctx.drawImage(image, 0, 0)
          ctx.font = '20px Arial'
          ctx.fillText(textContent, textPosition.x, textPosition.y)
        }
      }
    }

    const handleMouseDown = (event: MouseEvent) => {
      const offsetX = event.clientX - textPosition.x
      const offsetY = event.clientY - textPosition.y
      setDragOffset({ x: offsetX, y: offsetY })
      setIsDragging(true)
    }
    const handleMouseUp = () => setIsDragging(false)

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return
      setTextPosition({ x: event.clientX - dragOffset.x, y: event.clientY - dragOffset.y })
      redrawImageAndText(event.offsetX, event.offsetY)
    }

    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown)
      canvas.addEventListener('mouseup', handleMouseUp)
      canvas.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown)
        canvas.removeEventListener('mouseup', handleMouseUp)
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isDragging, imageUrl, textPosition])

  const redrawImageAndText = (x: number, y: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height

      const canvasX = (x - rect.left) * scaleX
      const canvasY = (y - rect.top) * scaleY

      const image = new Image()
      image.src = imageUrl
      image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        ctx.font = '18px Arial white'
        ctx.fillText(textContent, canvasX - dragOffset.x, canvasY - dragOffset.y)
      }
    }
  }

  return <CanvasStyled ref={canvasRef} />
}

export default ImageCanvas
