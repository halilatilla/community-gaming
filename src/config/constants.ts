export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII=' as const

export const GET_ALL_TOURNAMENTS_VARIABLES = {
  count: 24,
  offset: 1,
}

export const MENU_ITEMS = [
  {
    href: '/',
    text: 'tournaments listing',
  },
  {
    href: '/add-new',
    text: 'add new',
  },
  {
    href: '/#',
    text: 'sing in',
  },
]

export const PAGINATION_OPTIONS = {
  pageSize: 6 as const,
  startPage: 1,
}

export const SORTING_OPTIONS_SELECT = [
  { value: 'max', label: 'most voted' },
  { value: 'min', label: 'less voted' },
]

export const SORTING_OPTIONS = {
  MAX: 'max',
  MIN: 'min',
} as const

export const TOURNAMENT_LIST_ANIMATION_OPTIONS = {
  type: 'spring',
  damping: 20,
  stiffness: 200,
}
