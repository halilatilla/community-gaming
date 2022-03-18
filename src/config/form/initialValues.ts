import { nanoid } from 'nanoid'

export const addNewTournamentInitialValues = {
  name: '',
  alias: '',
  owner: {
    id: nanoid(),
    username: '',
    avatar: '',
  },
  deadline: '',
  prize: '',
  coverImage: '',
}

export const updateTournamentInitialValues = {
  deadline: '',
  id: '',
  name: '',
  owner: {
    id: '',
    username: '',
    avatar: '',
  },
}
