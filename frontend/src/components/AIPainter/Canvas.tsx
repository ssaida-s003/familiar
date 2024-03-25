import React, { useEffect, useRef, useState } from 'react'
import ToolBar from '@components/AIPainter/ToolBar.tsx'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border: black solid 1px;
`

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [isErasing, setIsErasing] = useState(false)
  const [lineWidth, setLineWidth] = useState(5)
  const [history, setHistory] = useState<string[]>([])
  const [step, setStep] = useState(0)
  const [brushColor, setBrushColor] = useState('#000000')

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = 444
      canvas.height = 770
      canvas.style.width = `444px`
      canvas.style.height = `770px`

      const context = canvas.getContext('2d')
      if (context) {
        context.scale(1, 1)
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = lineWidth
        contextRef.current = context
      }
    }
  }, [])

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.lineWidth = lineWidth
    }
  }, [lineWidth])

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current!.beginPath()
    contextRef.current!.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const endDrawing = () => {
    contextRef.current!.closePath()
    setIsDrawing(false)
    addHistory()
    console.log('현재 스텝', step)
  }

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent

    contextRef.current!.strokeStyle = isErasing ? 'white' : brushColor

    contextRef.current!.lineTo(offsetX, offsetY)
    contextRef.current!.stroke()
  }

  const addHistory = () => {
    const canvas = canvasRef.current
    if (canvas) {
      setStep(step + 1)
      const newHistory = history.slice(0, step + 1)
      newHistory.push(canvas.toDataURL())
      setHistory(newHistory)
    }
  }

  const undo = () => {
    if (step > 0) {
      console.log('현재 스텝', step)
      setStep(step - 1)
      console.log('현재 스텝', step)
      restoreHistory(step - 1)
    }
  }

  const redo = () => {
    if (step < history.length - 1) {
      setStep(step + 1)
      restoreHistory(step + 1)
    }
  }

  const restoreHistory = (step: number) => {
    const canvas = canvasRef.current
    const image = new Image()
    image.src = history[step]
    image.onload = () => {
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height)
          context.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
      }
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        setHistory([])
        setStep(-1)
      }
    }
  }

  return (
    <Container>
      <canvas onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} onMouseLeave={() => isDrawing && endDrawing()} ref={canvasRef} />
      <ToolBar setLineWidth={setLineWidth} setIsErasing={setIsErasing} clearCanvas={clearCanvas} undo={undo} redo={redo} setBrushColor={setBrushColor} />
    </Container>
  )
}

export default Canvas
