import { FC } from 'react'

import styles from './RequiredText.module.css'
import { IRequiredText } from './RequiredText.types'

const RequiredText: FC<IRequiredText> = ({ meta }) => {
  return meta?.error && meta?.touched ? (
    <div className={styles.requiredText}>
      <p>{meta?.error}</p>
    </div>
  ) : (
    <></>
  )
}

export default RequiredText
