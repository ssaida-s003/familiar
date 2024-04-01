import * as c from '@components/FamilyShare/style/CalenderStyle'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useQnAResponse, useResponseCategory, useTodayDateStore, useTodayShareResponse } from '@/stores/calendar'
import { fetchFamilyShareRecord, fetchQnARecord } from '@apis/calender'
import { useFamilyStore } from '@stores/family'
import { useQueries } from 'react-query'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calender = () => {
  const [today, setToday] = useState<Date>(new Date())
  const { date, setDate } = useTodayDateStore()
  const { familyId } = useFamilyStore()
  const { setCategoryId } = useResponseCategory()
  const { setTodayShareResponse } = useTodayShareResponse()
  const { setQnAResponse } = useQnAResponse()

  useEffect(() => {
    const initialDate = dayjs().format('YYYY-MM-DD')
    setDate(initialDate)
  }, [])

  const queryResults = useQueries([
    {
      queryKey: ['familyShareRecord', familyId, date],
      queryFn: () => fetchFamilyShareRecord(familyId, { date }),
      enabled: !!date,
    },
    {
      queryKey: ['qnaRecord', familyId, date],
      queryFn: () => fetchQnARecord(familyId, { date }),
      enabled: !!date,
    },
  ])

  useEffect(() => {
    const shareRecord = queryResults[0].data
    const qnaRecord = queryResults[1].data

    if (shareRecord) {
      setCategoryId(0)
      setTodayShareResponse(shareRecord)
      console.log(shareRecord)
    } else if (qnaRecord) {
      setCategoryId(1)
      setQnAResponse(qnaRecord)
      console.log(shareRecord)
    } else {
      setCategoryId(-1)
    }

    // if (shareRecord && shareRecord.length > 0) {
    //   setCategoryId(0)
    //   setTodayShareResponse(shareRecord)
    //   console.log(shareRecord)
    // } else if (qnaRecord && qnaRecord.questionId !== null) {
    //   setCategoryId(1)
    //   setQnAResponse(qnaRecord)
    // } else {
    //   setCategoryId(-1)
    // }
  }, [queryResults[0].data, queryResults[1].data])

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      const formatDate = dayjs(value).format('YYYY-MM-DD')
      setToday(value)
      setDate(formatDate)
    }
  }

  return (
    <c.CalendarWrapper>
      <c.StyledCalendar
        value={today}
        onChange={handleDateChange}
        formatDay={(_locale, date) => dayjs(date).format('DD')}
        formatYear={(_locale, date) => dayjs(date).format('YYYY')}
        formatMonthYear={(_locale, date) => dayjs(date).format('YYYY. MM')}
        calendarType="gregory"
        showNeighboringMonth={false}
        minDetail="year"
      />
    </c.CalendarWrapper>
  )
}

export default Calender
