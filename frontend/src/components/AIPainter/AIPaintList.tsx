import AiPaintCard from '@components/AIPainter/AIPaintCard'
import styled from 'styled-components'
import { useFamilyStore } from '@stores/family'
import { deletePaint, getAllPaint } from '@apis/aiPainter'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import AxiosError from '@common/AxiosError'

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

const usePaintList = (familyId: number) => {
  return useQuery(['paintList', familyId], () => getAllPaint(familyId))
}

const AIPaintList = () => {
  const { familyId } = useFamilyStore()
  const queryClient = useQueryClient()
  const { data, isLoading, error } = usePaintList(familyId)

  const deleteMutation = useMutation((drawingId: number) => deletePaint(familyId, drawingId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['paintList', familyId])
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <AxiosError />

  return <Container>{data && data.map(paint => <AiPaintCard paint={paint} key={paint.drawingId} onDeleted={() => deleteMutation.mutate(paint.drawingId)} />)}</Container>
}

export default AIPaintList
