import { FC } from 'react'
import classnames from 'classnames'

import ILabel from './Label.types'

const Label: FC<ILabel> = ({ label, isRequired }) => {
  return (
    <span className={classnames('relative capitalize text-gray-300', { 'ml-2': isRequired })}>
      {label}
      {isRequired && <div className={classnames('absolute -top-1 -left-[10px] text-danger')}>*</div>}
    </span>
  )
}

export default Label
