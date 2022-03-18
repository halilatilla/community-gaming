import { ITournament } from '@src/types'

export default interface IUpdateTournament {
  tournament: ITournament
  onCancel: () => void
}
