import Page from '../components/Page'
import DetailingCalendar from '../components/DetailingCalendar'

function SchedulingPage() {
  return (
    <Page title="Scheduling">
      <p>
        Book your next detail online. Choose a service, pick a time, and we will
        confirm your appointment.
      </p>
      <DetailingCalendar />
    </Page>
  )
}

export default SchedulingPage
