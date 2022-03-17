import { FC } from 'react'
import classnames from 'classnames'
import { useField } from 'formik'
import NumberFormat from 'react-number-format'

import RequiredText from '../RequiredText/RequiredText'
import Label from '../Label/Label'
import IInputNumber from './InputNumber.types'
import styles from './InputNumber.module.css'

const InputNumber: FC<IInputNumber> = ({ label, name, isRequired, ...rest }) => {
  const [field, meta] = useField(name)

  console.log(field)

  return (
    <label className="block">
      {label && <Label label={label} isRequired={isRequired} />}
      <NumberFormat
        className={classnames(styles.input)}
        autoComplete="off"
        thousandSeparator
        prefix="$"
        {...rest}
        {...field}
      />

      <RequiredText meta={meta} />
    </label>
  )
}

export default InputNumber
