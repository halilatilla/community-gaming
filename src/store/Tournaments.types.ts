import { ITournament } from '@src/types'

export default interface ITournamentsContext {
  tournaments?: ITournament[]
  setTournaments: (tournaments: ITournament[]) => void
  upVote: (id: string) => void
  downVote: (id: string) => void
  removeTournament: (id: string) => void
}
