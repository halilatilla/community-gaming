import { FC } from 'react'
import classnames from 'classnames'

import TournamentCard from './TournamentCard/TournamentCard'
import ITournamentList from './TournamentList.types'

const TournamentList: FC<ITournamentList> = ({ tournaments, className, ...rest }) => {
  return (
    <ul className={classnames('grid gap-8  md:grid-cols-2 xl:grid-cols-3', className)} {...rest}>
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </ul>
  )
}

export default TournamentList
