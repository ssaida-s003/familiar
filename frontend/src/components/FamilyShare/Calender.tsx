import * as c from '@components/FamilyShare/style/CalenderStyle'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useTodayDateStore } from '@stores/familyShare'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calender = () => {
  const [today, setToday] = useState<Value>(new Date())
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date())
  const { setDate } = useTodayDateStore()

  useEffect(() => {
    setDate(dayjs(new Date()).format('YYYY-MM-DD'))
  }, [])

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setToday(value)
      setDate(dayjs(value).format('YYYY-MM-DD'))
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
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
      />
    </c.CalendarWrapper>
  )
}

export default Calender
