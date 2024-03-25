import * as c from '@components/FamilyShare/style/CalenderStyle.tsx'
import { useState } from 'react'
import dayjs from 'dayjs'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calender = () => {
  const today = new Date()
  const [date, setDate] = useState<Value>(today)
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date())

  const handleDateChange = (newDate: Value) => {
    setDate(newDate)
  }

  return (
    <c.CalendarWrapper>
      <c.StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={date => dayjs(date).format('D')}
        formatYear={date => dayjs(date).format('YYYY')}
        formatMonthYear={date => dayjs(date).format('YYYY. MM')}
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
