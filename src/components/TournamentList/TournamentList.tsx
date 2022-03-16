import { FC } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'

import { useTournamentsContext } from '@src/store'
import { getPaginatedList, getSortedList } from '@src/lib'
import { PAGINATION_OPTIONS, TOURNAMENT_LIST_ANIMATION_OPTIONS } from '@src/config/constants'
import TournamentCard from './TournamentCard/TournamentCard'
import ITournamentList from './TournamentList.types'

const TournamentList: FC<ITournamentList> = ({ className, page, sortBy, ...rest }) => {
  const { tournaments } = useTournamentsContext()

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 200,
  }
  return (
    <ul className={classnames('grid gap-8 md:grid-cols-2 xl:grid-cols-3', className)} {...rest}>
      {getPaginatedList(getSortedList(tournaments || [], sortBy), page, PAGINATION_OPTIONS.pageSize)?.map(
        (tournament) => (
          <motion.li layout transition={TOURNAMENT_LIST_ANIMATION_OPTIONS} key={tournament?.id}>
            <TournamentCard tournament={tournament} />
          </motion.li>
        ),
      )}
    </ul>
  )
}

export default TournamentList
