import * as c from '@components/FamilyShare/style/CalenderStyle.tsx'
import { useState } from 'react'
import dayjs from 'dayjs'
import { useTodayDateStore } from '@stores/familyShare'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calender = () => {
  const [today, setToday] = useState<Value>(new Date())
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date())
  const { setDate } = useTodayDateStore()
  const handleDateChange = (newDate: Value) => {
    setToday(newDate)
    if (newDate && 'toISOString' in newDate) {
      const formattedValue = newDate.toISOString().split('T')[0]
      setDate(formattedValue)
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
