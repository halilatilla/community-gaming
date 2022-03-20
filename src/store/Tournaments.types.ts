import { ITournament } from '@src/types'

export default interface ITournamentsContext {
  tournaments?: ITournament[]
  setTournaments: (tournaments: ITournament[]) => void
  handleUpVote: (id: string) => void
  handleDownVote: (id: string) => void
}
