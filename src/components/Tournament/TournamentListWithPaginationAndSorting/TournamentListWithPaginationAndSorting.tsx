import { FC, useState } from 'react'

import { useTournamentsContext } from '@src/store'
import { PAGINATION_OPTIONS, SORTING_OPTIONS_SELECT, SORTING_OPTIONS } from '@src/config/constants'
import { Select, Pagination } from '@src/components'
import TournamentList from '../TournamentList/TournamentList'

const TournamentListWithPaginationAndSorting: FC = () => {
  const { tournaments } = useTournamentsContext()
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
        total={tournaments?.length || 0}
        pageSize={PAGINATION_OPTIONS.pageSize}
        onChange={handlePagination}
        hideOnSinglePage={true}
      />
    </div>
  )
}

export default TournamentListWithPaginationAndSorting
