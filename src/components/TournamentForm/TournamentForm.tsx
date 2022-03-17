import { FC } from 'react'
import { Formik, Form } from 'formik'

import { Input, InputNumber, FileUpload, Button } from '@src/components'
import { addNewTournamentInitialValues, addNewTournamentValidation } from '@src/config/form'
import ITournamentForm from './TournamentForm.types'

const TournamentForm: FC<ITournamentForm> = () => {
  const onSubmitHandler = (values: any) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={addNewTournamentInitialValues}
      validationSchema={addNewTournamentValidation}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmitHandler}
    >
      <Form className="mx-auto max-w-lg space-y-7">
        <Input label="name" name="name" placeholder="Enter your name" isRequired />
        <Input label="alias" name="alias" placeholder="Enter your alias name" isRequired />
        <Input label="owner username" name="ownerUsername" placeholder="Enter your owner user name" isRequired />
        <InputNumber label="prize" name="prize" placeholder="Enter your prize" isRequired />
        <Input label="deadline" name="deadline" placeholder="Enter your deadline" isRequired type="date" />
        <Input label="owner id" name="ownerId" disabled />
        <FileUpload name="ownerAvatar" label="owner avatar" isRequired />
        <FileUpload name="coverImage" label="cover image" isRequired />
        <Button type="submit" label="Add New" className="w-full" onClick={() => {}} />
      </Form>
    </Formik>
  )
}

export default TournamentForm
