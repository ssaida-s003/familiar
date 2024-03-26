import { useQuery } from 'react-query'
import { getAllPaintSave } from '@apis/aiPainter'
import { useFamilyStore } from '@stores/family.ts'
import AiPaintCard from '@components/AIPainter/AIPaintCard.tsx'

const AiPaintList = () => {
  const { familyId } = useFamilyStore()
  const { data, isLoading, error } = useQuery(['paintList', familyId], () => getAllPaintSave(familyId))

  if (isLoading) return <div>Loading...</div>
  if (error) return <div></div>

  return <div>{data && data.map(paint => <AiPaintCard paint={paint} key={paint.drawingId} />)}</div>
}

export default AiPaintList
