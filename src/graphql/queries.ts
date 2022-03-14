import { gql } from '@apollo/client'

const POSTS_PER_PAGE = 10

export const GET_POSTS = gql`
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
