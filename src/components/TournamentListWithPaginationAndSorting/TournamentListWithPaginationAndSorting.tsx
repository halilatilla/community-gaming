import { FC, useState } from 'react'

import {
  GET_ALL_TOURNAMENTS_COUNT,
  PAGINATION_OPTIONS,
  SORTING_OPTIONS_SELECT,
  SORTING_OPTIONS,
} from '@src/config/constants'
import { Select, TournamentList, Pagination } from '@src/components'

const TournamentListWithPaginationAndSorting: FC = () => {
  const [page, setPage] = useState(PAGINATION_OPTIONS.startPage)
  const [sortBy, setSortBy] = useState<string>(SORTING_OPTIONS.MAX)

  const handlePagination = (e: number) => {
    setPage(e)
  }

  const handleSortingBy = (e: string) => {
    setSortBy(e)
  }

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-center text-2xl font-bold capitalize md:text-3xl lg:text-4xl">Tournaments</h1>
        <Select options={SORTING_OPTIONS_SELECT} onChange={(e) => handleSortingBy(e.target.value)} />
      </div>

      <TournamentList page={page} sortBy={sortBy} />

      <Pagination
        current={page}
        total={GET_ALL_TOURNAMENTS_COUNT}
        pageSize={PAGINATION_OPTIONS.pageSize}
        onChange={handlePagination}
        hideOnSinglePage={true}
      />
    </div>
  )
}

export default TournamentListWithPaginationAndSorting
