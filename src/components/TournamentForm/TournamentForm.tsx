import { FC } from 'react'
import { Formik, Form } from 'formik'

import { Input, FileUpload } from '@src/components'
import { addNewTournamentInitialValues, addNewTournamentValidation } from '@src/config/form'
import ITournamentForm from './TournamentForm.types'

const TournamentForm: FC<ITournamentForm> = () => {
  return (
    <Formik
      initialValues={addNewTournamentInitialValues}
      validationSchema={addNewTournamentValidation}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(value) => console.log(value)}
    >
      <Form className="mx-auto max-w-lg space-y-7">
        <Input label="name" name="name" placeholder="Enter your name" isRequired />
        <Input label="alias" name="alias" placeholder="Enter your alias name" isRequired />
        <Input label="owner username" name="ownerUsername" placeholder="Enter your owner user name" isRequired />
        <FileUpload name="ownerAvatar" label="owner avatar" isRequired />
        <Input label="owner id" name="ownerId" disabled />
        <Input label="deadline" name="deadline" placeholder="Enter your deadline" isRequired type="date" />
        <FileUpload name="coverImage" label="cover image" isRequired />
        <button>submit</button>
      </Form>
    </Formik>
  )
}

export default TournamentForm
