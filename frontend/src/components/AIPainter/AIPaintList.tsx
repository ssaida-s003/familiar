import AiPaintCard from '@components/AIPainter/AIPaintCard'
import styled from 'styled-components'
import { useFamilyStore } from '@stores/family'
import { useQuery } from 'react-query'
import { getAllPaintSave } from '@apis/aiPainter'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
const AiPaintList = () => {
  const { familyId } = useFamilyStore()
  const { data, isLoading, error } = useQuery(['paintList', familyId], () => getAllPaintSave(familyId))

  if (isLoading) return <div>Loading...</div>
  if (error) return <div></div>

  return <Container>{data && data.map(paint => <AiPaintCard paint={paint} key={paint.drawingId} />)}</Container>
}

export default AiPaintList
