import { format } from 'date-fns'

export default function getFormattedDeadline(deadline: Date): string {
  return format(new Date(deadline), 'MM/dd/yyyy KK:mm')
}
