import { useEffect, useRef, useState } from 'react'
import * as a from '@components/FamilyShare/style/AudioVisualizerStyle'

const AudioVisualizer = () => {
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
      const barsData = Array.from(dataArray).slice(0, 25) // 첫 50개의 주파수 데이터만 사용
      setBars(barsData.map(n => (n / 400) * 90)) // 높이를 퍼센트로 변환
    }

    draw()
  }

  return (
    <a.VisualizerContainer>
      {bars.map((height, i) => (
        <a.Bar key={i} height={height} />
      ))}
    </a.VisualizerContainer>
  )
}

export default AudioVisualizer
