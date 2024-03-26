import AiPaintCard from '@components/AIPainter/AIPaintCard'
import styled from 'styled-components'
import { useFamilyStore } from '@stores/family'
import { getAllPaint } from '@apis/aiPainter'
import { useQuery } from 'react-query'

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

  const usePaintList = (familyId: number) => {
    return useQuery(['paintList', familyId], () => getAllPaint(familyId))
  }

  const { data, isLoading, error } = usePaintList(familyId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error occurred</div> // 에러 처리를 좀 더 명확하게

  return <Container>{data && data.map(paint => <AiPaintCard paint={paint} key={paint.drawingId} />)}</Container>
}

export default AiPaintList
