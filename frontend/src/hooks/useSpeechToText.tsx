import { useEffect, useState } from 'react'

const useSpeechToText = () => {
  const [result, setResult] = useState<any>({
    text: '',
    error: null,
  })
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    const initRecognition = () => {
      //@ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

      if (!SpeechRecognition) {
        console.error('SpeechRecognition이 지원되지 않습니다.')
        return null
      }

      const newRecognition = new SpeechRecognition()
      newRecognition.lang = 'ko-KR'
      newRecognition.interimResults = false
      newRecognition.maxAlternatives = 1

      return newRecognition
    }

    const speechRecognition = initRecognition()
    setRecognition(speechRecognition)
  }, [])

  const startListening = () => {
    if (!recognition) {
      setResult({ text: '', error: 'SpeechRecognition이 지원되지 않습니다.' })
      return
    }

    recognition.addEventListener('result', handleResult)
    recognition.addEventListener('error', handleError)
    recognition.start()
  }

  const stopListening = () => {
    if (recognition) {
      recognition.removeEventListener('result', handleResult)
      recognition.removeEventListener('error', handleError)
      recognition.stop()
    }
  }

  const handleResult = (event: any) => {
    const text = event.results[0][0].transcript
    setResult({ text, error: null })
  }

  const handleError = (event: any) => {
    setResult({
      text: '',
      error: `SpeechRecognition error: ${event.error}`,
    })
    stopListening()
  }

  return [result, startListening, stopListening]
}

export default useSpeechToText
