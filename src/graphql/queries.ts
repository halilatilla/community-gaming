import { gql } from '@apollo/client'

export const GET_ALL_TOURNAMENTS_QUERY = gql`
  query getAllTournaments($count: Int!, $offset: Int!) {
    listedTournaments(count: $count, offset: $offset) {
      id
      name
      deadline
      waitlistParticipantsCount
      owner {
        id
        username
        avatar
      }
    }
  }
`
