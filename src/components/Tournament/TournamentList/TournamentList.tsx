import { FC } from 'react'
import { motion } from 'framer-motion'

import { useTournamentsContext } from '@src/store'
import { getPaginatedList, getSortedListByVote } from '@src/lib'
import { PAGINATION_OPTIONS, TOURNAMENT_LIST_ANIMATION_OPTIONS } from '@src/config/constants'

import TournamentCard from '../TournamentCard/TournamentCard'
import styles from './TournamentList.module.css'
import ITournamentList from './TournamentList.types'

const TournamentList: FC<ITournamentList> = ({ page, sortBy, ...rest }) => {
  const { tournaments } = useTournamentsContext()

  return (
    <ul className={styles.tournamentList} {...rest}>
      {getPaginatedList(getSortedListByVote(tournaments!, sortBy), page, PAGINATION_OPTIONS.pageSize)?.map(
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
