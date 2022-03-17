import { nanoid } from 'nanoid'

export const addNewTournamentInitialValues = {
  name: '',
  alias: '',
  ownerUsername: '',
  ownerId: nanoid(),
  deadline: '',
  prize: '',
  ownerAvatar: { file: null, preview: '' },
  coverImage: { file: null, preview: '' },
}
