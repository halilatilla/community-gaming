import * as Yup from 'yup'

const requiredField = Yup.string().required('This field is required')
const fileRequired = Yup.object().shape({
  file: Yup.mixed().required('This field is required').nullable(),
  preview: Yup.string().required('This field is required'),
})

export const addNewTournamentValidation = Yup.object({
  name: requiredField,
  alias: requiredField,
  owner: Yup.object({
    id: requiredField,
    username: requiredField,
    avatar: fileRequired,
  }),
  prize: requiredField,
  deadline: requiredField,
  coverImage: fileRequired,
})
