import React, { useEffect, useRef, useState } from 'react'
import * as a from '@components/FamilyShare/style/AudioVisualizerStyle'

interface AudioVisualizerProps {
  isCompleted: boolean
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isCompleted }) => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    setupAudioContext()
    return () => {
      audioContextRef.current?.close()
    }
  }, [])

  const setupAudioContext = async () => {
    if (!navigator.mediaDevices) return

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const audioContext = new AudioContext()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaStreamSource(stream)

    source.connect(analyser)
    analyser.fftSize = 256
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    audioContextRef.current = audioContext
    analyserRef.current = analyser

    const draw = () => {
      requestAnimationFrame(draw)

      analyser.getByteFrequencyData(dataArray)
      const barsData = Array.from(dataArray).slice(0, 20)
      setBars(barsData.map(n => (n / 400) * 100))
    }

    draw()
  }

  return (
    <a.VisualizerContainer>
      {bars.map((height, i) => (
        <a.Bar key={i} height={isCompleted ? 0 : height} />
      ))}
    </a.VisualizerContainer>
  )
}

export default AudioVisualizer
