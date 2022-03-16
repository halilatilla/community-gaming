export interface ITournament {
  __typename?: string
  id: string
  name: string
  deadline: any
  waitlistParticipantsCount: number
  owner: { __typename?: 'User'; id: string; username: string; avatar: string }
  vote?: number
  voteDate?: number
}
