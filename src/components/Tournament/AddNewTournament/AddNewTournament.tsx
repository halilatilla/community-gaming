import { FC } from 'react'
import { Formik, Form } from 'formik'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { useTournamentsContext } from '@src/store'
import { Input, InputNumber, FileUpload, Button, Datepicker } from '@src/components'
import { addNewTournamentInitialValues, addNewTournamentValidation } from '@src/config/form'

const TournamentForm: FC = () => {
  const { tournaments, setTournaments } = useTournamentsContext()
  const router = useRouter()

  const onSubmitHandler = (values: any) => {
    setTournaments([...tournaments!, { ...values, id: nanoid() }])
    router.push('/')
    toast.success(`Tournament added successfully`)
  }

  return (
    <Formik
      initialValues={addNewTournamentInitialValues}
      validationSchema={addNewTournamentValidation}
      enableReinitialize
      onSubmit={onSubmitHandler}
    >
      <Form className="mx-auto max-w-lg space-y-7">
        <Input label="name" name="name" placeholder="Enter your name" isRequired />
        <Input label="alias" name="alias" placeholder="Enter your alias name" isRequired />
        <Input label="owner username" name="owner.username" placeholder="Enter your owner user name" isRequired />
        <InputNumber label="prize" name="prize" placeholder="Enter your prize" isRequired />
        <Datepicker label="deadline" name="deadline" placeholder="Enter your deadline" isRequired />
        <FileUpload name="owner.avatar" label="owner avatar" isRequired />
        <Input label="owner id" name="owner.id" disabled />
        <FileUpload name="coverImage" label="cover image" isRequired />
        <Button type="submit" label="Add New" className="!mt-12 block" />
      </Form>
    </Formik>
  )
}

export default TournamentForm
