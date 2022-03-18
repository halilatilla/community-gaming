import * as Yup from 'yup'

const requiredField = Yup.string().required('This field is required')

export const addNewTournamentValidation = Yup.object({
  name: requiredField,
  alias: requiredField,
  owner: Yup.object({
    id: requiredField,
    username: requiredField,
    avatar: requiredField,
  }),
  prize: requiredField,
  deadline: requiredField,
  coverImage: requiredField,
})

export const updateTournamentValidation = Yup.object({
  deadline: requiredField,
  id: requiredField,
  name: requiredField,
  owner: Yup.object({
    avatar: requiredField,
    id: requiredField,
    username: requiredField,
  }),
})
