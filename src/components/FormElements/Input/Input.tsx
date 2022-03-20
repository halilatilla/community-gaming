import { FC } from 'react'
import classnames from 'classnames'
import { useField } from 'formik'

import RequiredText from '../RequiredText/RequiredText'
import Label from '../Label/Label'
import IInput from './Input.types'
import styles from '../InputCommon.module.css'

const Input: FC<IInput> = ({ label, type = 'text', name, isRequired, ...rest }) => {
  const [field, meta] = useField(name)
  return (
    <label className="block">
      {label && <Label label={label} isRequired={isRequired} />}
      <input type={type} className={classnames(styles.input)} autoComplete="off" {...rest} {...field} />

      <RequiredText meta={meta} />
    </label>
  )
}

export default Input
