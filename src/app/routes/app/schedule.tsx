import { Calendar } from '@/components/ui/calendar/calendar'
import { FlexColumn } from '@/components/ui/layout/flexbox'
import { Typography } from '@mui/material'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const ScheduleRoute = () => {
  return (
    <FlexColumn>
      <Typography variant="h1">Schedule</Typography>
      <Calendar />
    </FlexColumn>
  )
}
