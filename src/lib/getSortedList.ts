import { SORTING_OPTIONS } from '@src/config/constants'
import { ITournament } from '@src/types'

export default function getSortedList(list: ITournament[], key: string): ITournament[] {
  const sortedList = list?.sort((a, b) => {
    if (key === SORTING_OPTIONS.MAX) {
      return b?.vote === a?.vote ? b?.voteDate! - a?.voteDate! : (b?.vote ?? 0) - (a?.vote ?? 0)
    }

    return a?.vote === b?.vote ? a?.voteDate! - b?.voteDate! : (a?.vote ?? 0) - (b?.vote ?? 0)
  })

  return sortedList
}
