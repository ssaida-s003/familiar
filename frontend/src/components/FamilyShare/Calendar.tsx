import * as c from '@components/FamilyShare/style/CalenderStyle'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useQnAResponse, useResponseCategory, useTodayDateStore, useTodayShareResponse } from '@/stores/calendar'
import { useThemeStore } from '@stores/theme.ts'
import { useCalendarQueries } from '@/hooks/useCalendarQueries'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calender = () => {
  const [today, setToday] = useState<Date>(new Date())
  const { date, setDate } = useTodayDateStore()
  const { setCategoryId } = useResponseCategory()
  const { setTodayShareResponse } = useTodayShareResponse()
  const { setQnAResponse } = useQnAResponse()
  const { mainColor } = useThemeStore()

  const queryResults = useCalendarQueries()

  useEffect(() => {
    const initialDate = dayjs().format('YYYY-MM-DD')
    console.log(date)
    setDate(initialDate)
  }, [])

  useEffect(() => {
    const shareRecord = queryResults[0].data
    const qnaRecord = queryResults[1].data

    console.log(queryResults[0])
    console.log(queryResults[1])

    if (qnaRecord && qnaRecord.questionId !== null) {
      setCategoryId(1)
      qnaRecord.answers = qnaRecord.answers.reverse()
      setQnAResponse(qnaRecord)
      console.log(qnaRecord)
    } else if (shareRecord) {
      setCategoryId(0)
      setTodayShareResponse(shareRecord.reverse())
      console.log('shareRecord')
      console.log(shareRecord)
    } else {
      setCategoryId(-1)
    }
  }, [queryResults[0].data, queryResults[1].data])

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      const formatDate = dayjs(value).format('YYYY-MM-DD')
      setToday(value)
      setDate(formatDate)
    }
  }

  return (
    <c.CalendarWrapper $mainColor={mainColor}>
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
