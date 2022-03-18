import { FC } from 'react'
import { Formik, Form } from 'formik'
import { nanoid } from 'nanoid'

import { useTournamentsContext } from '@src/store'
import { Input, InputNumber, FileUpload, Button } from '@src/components'
import { addNewTournamentInitialValues, addNewTournamentValidation } from '@src/config/form'
import ITournamentForm from './TournamentForm.types'

const TournamentForm: FC<ITournamentForm> = () => {
  const { tournaments, setTournaments } = useTournamentsContext()

  const onSubmitHandler = (values: any) => {
    setTournaments([...tournaments!, { ...values, id: nanoid() }])
  }

  return (
    <Formik
      initialValues={addNewTournamentInitialValues}
      validationSchema={addNewTournamentValidation}
      validateOnChange={true}
      onSubmit={onSubmitHandler}
    >
      {({ dirty, isValid }) => (
        <Form className="mx-auto max-w-lg space-y-7">
          <Input label="name" name="name" placeholder="Enter your name" isRequired />
          <Input label="alias" name="alias" placeholder="Enter your alias name" isRequired />
          <Input label="owner username" name="owner.username" placeholder="Enter your owner user name" isRequired />
          <InputNumber label="prize" name="prize" placeholder="Enter your prize" isRequired />
          <Input label="deadline" name="deadline" placeholder="Enter your deadline" isRequired type="date" />
          <FileUpload name="owner.avatar" label="owner avatar" isRequired />
          <Input label="owner id" name="owner.id" disabled />
          <FileUpload name="coverImage" label="cover image" isRequired />
          <Button type="submit" label="Add New" className="!mt-12 block" disabled={!(isValid && dirty)} />
        </Form>
      )}
    </Formik>
  )
}

export default TournamentForm
