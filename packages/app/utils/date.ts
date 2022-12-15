const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function getMonthFromNumber(month: number): string {
  const result = MONTHS[month - 1]

  if (!result) {
    throw new Error('Invalid month number')
  }

  return result
}
