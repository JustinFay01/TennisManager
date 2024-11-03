import { localizer } from '@/lib/localizer'
import { styled } from '@mui/material'
import React from 'react'
import { Calendar as BigCalendar } from 'react-big-calendar'

export type CalendarProps = React.ComponentProps<typeof BigCalendar>

const StyledBigCalendar = styled(BigCalendar)({
  height: 500,
  width: '100%',
})

export const Calendar = () => {
  return (
    <BigCalendar
      events={[]}
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      style={{ height: 500 }}
    />
  )
}
