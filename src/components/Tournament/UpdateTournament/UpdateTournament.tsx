import { FC } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

import { useTournamentsContext } from '@src/store'
import { Input, FileUpload, Button } from '@src/components'
import { updateTournamentInitialValues, updateTournamentValidation } from '@src/config/form'
import IUpdateTournament from './UpdateTournament.types'

const UpdateTournament: FC<IUpdateTournament> = ({ tournament: initialValues, onCancel }) => {
  const { tournaments, setTournaments } = useTournamentsContext()

  const onSubmitHandler = (values: any) => {
    const newTournaments = tournaments?.map((t) => {
      if (t.id === values.id) {
        return {
          ...t,
          ...values,
        }
      }
      return t
    })
    setTournaments(newTournaments)
    toast.success('Tournament updated successfully')
    onCancel()
  }

  return (
    <Formik
      initialValues={{
        ...updateTournamentInitialValues,
        ...initialValues,
        deadline: format(new Date(initialValues?.deadline), 'yyyy-MM-dd'),
      }}
      validationSchema={updateTournamentValidation}
      validateOnChange={true}
      onSubmit={onSubmitHandler}
    >
      {({ dirty, isValid }) => (
        <Form className="mx-auto max-w-lg space-y-7">
          <Input label="name" name="name" placeholder="Enter your name" isRequired />
          <Input label="owner username" name="owner.username" placeholder="Enter your owner user name" isRequired />
          <Input label="deadline" name="deadline" placeholder="Enter your deadline" isRequired type="date" />
          <FileUpload name="owner.avatar" label="owner avatar" isRequired />
          <div className="flex justify-end space-x-4">
            <Button type="submit" label="update" disabled={!(isValid && dirty)} />
            <Button label="cancel" onClick={onCancel} />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default UpdateTournament
