import { nanoid } from 'nanoid'

export const addNewTournamentInitialValues = {
  name: '',
  alias: '',
  owner: {
    id: nanoid(),
    username: '',
    avatar: { file: null, preview: '' },
  },
  deadline: '',
  prize: '',
  coverImage: { file: null, preview: '' },
}
