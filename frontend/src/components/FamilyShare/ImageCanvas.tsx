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
  const [imageLoaded, setImageLoaded] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const imageRef = useRef(new Image())

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (ctx && !imageLoaded) {
      imageRef.current.src = imageUrl
      imageRef.current.onload = () => {
        if (canvas) {
          canvas.width = imageRef.current.width
          canvas.height = imageRef.current.height
          ctx.drawImage(imageRef.current, 0, 0)
          ctx.font = '20px Arial'
          ctx.fillText(content, textPosition.x, textPosition.y)
          setImageLoaded(true)
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
      redrawImageAndText()
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
  }, [isDragging, imageUrl, textPosition, imageLoaded])

  const redrawImageAndText = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx && imageLoaded) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height)
      drawText(ctx, content, textPosition.x, textPosition.y, canvas.width)
    }
  }

  const drawText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number) => {
    ctx.font = '20px Arial'
    const lineHeight = 24
    const lines = []

    let line = ''
    const words = text.split(' ')
    words.forEach(word => {
      const testLine = line + word + ' '
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width
      if (testWidth > maxWidth) {
        lines.push(line)
        line = word + ' '
      } else {
        line = testLine
      }
    })
    lines.push(line)

    console.log(lines)

    for (let i = 0; i < lines.length; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      const metrics = ctx.measureText(lines[i])
      ctx.fillRect(x - 5, y + i * lineHeight - 20, metrics.width + 10, lineHeight)

      ctx.fillStyle = 'black'
      ctx.fillText(lines[i], x, y + i * lineHeight)
    }
  }

  return <CanvasStyled ref={canvasRef} />
}

export default ImageCanvas
