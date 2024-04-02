import { useQueries } from 'react-query'
import { fetchFamilyShareRecord, fetchQnARecord } from '@/apis/calendar'
import { useFamilyStore } from '@stores/family'
import { useTodayDateStore } from '@/stores/calendar'

export const useCalendarQueries = () => {
  const { familyId } = useFamilyStore()
  const { date } = useTodayDateStore()

  const queryResults = useQueries([
    {
      queryKey: ['familyShareRecord', familyId, date],
      queryFn: () => fetchFamilyShareRecord(familyId, { date }),
      enabled: !!familyId && !!date,
    },
    {
      queryKey: ['qnaRecord', familyId, date],
      queryFn: () => fetchQnARecord(familyId, { date }),
      enabled: !!familyId && !!date,
    },
  ])

  return queryResults
}
