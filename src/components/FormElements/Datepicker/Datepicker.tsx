import { FC } from 'react'
import classnames from 'classnames'
import { useField } from 'formik'
import ReactDatePicker from 'react-datepicker'
import { HiOutlineCalendar } from 'react-icons/hi'

import RequiredText from '../RequiredText/RequiredText'
import Label from '../Label/Label'
import IDatepicker from './Datepicker.types'
import styles from '../InputCommon.module.css'

const Datepicker: FC<IDatepicker> = ({ label, name, isRequired, placeholder, ...rest }) => {
  const [field, meta, { setValue }] = useField(name)

  return (
    <label className="relative block">
      {label && <Label label={label} isRequired={isRequired} />}
      <ReactDatePicker
        id={name}
        dateFormat="dd/MM/yyyy HH:mm"
        showTimeSelect
        showPopperArrow={false}
        useShortMonthInDropdown
        placeholderText={placeholder}
        showYearDropdown
        autoComplete="off"
        dropdownMode="select"
        className={classnames(styles.input, { [styles.required]: meta?.error && meta?.touched })}
        selected={field.value}
        {...rest}
        {...field}
        onChange={(date) => setValue(date)}
      />
      <HiOutlineCalendar className="absolute right-3 bottom-5 text-xl text-secondary" />
      <RequiredText meta={meta} />
    </label>
  )
}

export default Datepicker
