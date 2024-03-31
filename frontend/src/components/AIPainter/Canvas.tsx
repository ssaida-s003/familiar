import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import ToolBar from '@components/AIPainter/ToolBar'
import * as c from '@components/AIPainter/style/CanvasStyle'
import { usePaintStore } from '@stores/aiPaint'
import { useFamilyStore } from '@stores/family'
import { AiPainterSaveReqType } from '@/types/aiPainter'
import { aiPaintSave } from '@apis/aiPainter'

interface CanvasProps {
  backgroundImage?: string // 배경 이미지 URL 또는 Base64 데이터
}

const Canvas: React.FC<CanvasProps> = ({ backgroundImage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [isErasing, setIsErasing] = useState(false)
  const [lineWidth, setLineWidth] = useState(5)
  const [history, setHistory] = useState<string[]>([])
  const [step, setStep] = useState(0)
  const [brushColor, setBrushColor] = useState('#000000')
  const paintStore = usePaintStore()
  const { familyId } = useFamilyStore()
  const navigate = useNavigate()
  const location = useLocation()
  const backgroundImg = location.state?.backgroundImage

  useEffect(() => {
    if (backgroundImage && canvasRef.current && contextRef.current) {
      const context = contextRef.current
      const img = new Image()
      console.log(backgroundImg)
      img.onload = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        context.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height)
      }
      img.src = backgroundImage
      img.crossOrigin = 'Anonymous'
    }
  }, [backgroundImage])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      const ratio = window.devicePixelRatio || 1
      canvas.width = 444 * ratio
      canvas.height = 730 * ratio
      canvas.style.width = `444px`
      canvas.style.height = `730px`

      if (context) {
        context.scale(ratio, ratio)
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = lineWidth
        contextRef.current = context
      }

      if (canvas) {
        const initialCanvasState = canvas.toDataURL()
        setHistory([initialCanvasState])
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
      console.log(newHistory)
    }
  }

  const undo = () => {
    if (step > 0) {
      setStep(step - 1)
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
    const context = contextRef.current
    image.src = history[step]
    if (canvas) {
      image.onload = () => {
        const ratio = window.devicePixelRatio || 1
        context?.clearRect(0, 0, canvas.width, canvas.height)
        context?.drawImage(image, 0, 0, canvas.width / ratio, canvas.height / ratio)
      }
      image.onerror = error => {
        console.error('Failed to load image', error)
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

  const saveMutation = useMutation(async (data: AiPainterSaveReqType) => {
    return aiPaintSave(familyId, data)
  })

  const goNextStep = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const dataUrl = canvas.toDataURL()

      if (backgroundImg) {
        const { title, originalImage } = paintStore
        const aiPainterSaveReq = {
          originalImage: originalImage.replace('data:image/png;base64,', ''),
          convertedImage: dataUrl.replace('data:image/png;base64,', ''),
          name: title,
        }

        saveMutation.mutate(aiPainterSaveReq)
      } else {
        navigate('/display/AI-painter/setup', { state: { image: dataUrl } })
      }
    }
  }

  if (saveMutation.isSuccess) {
    navigate('/display/AI-painter/album')
  }
  const goAlbum = () => {
    navigate('/display/AI-painter/album')
  }

  return (
    <c.Container>
      <c.AlbumBtn src="/icon/icon_albumBtn.png" onClick={goAlbum} />
      <canvas onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} onMouseLeave={() => isDrawing && endDrawing()} ref={canvasRef} />
      <ToolBar setLineWidth={setLineWidth} setIsErasing={setIsErasing} clearCanvas={clearCanvas} undo={undo} redo={redo} setBrushColor={setBrushColor} />
      {backgroundImg && <c.InfoText>그림을 추가로 꾸밀 수 있어요!</c.InfoText>}
      <c.NextStepBtn src={backgroundImg ? '/icon/icon_AIStoreBtn.png' : '/icon/icon_AIChangeBtn.png'} onClick={goNextStep} />
    </c.Container>
  )
}

export default Canvas
