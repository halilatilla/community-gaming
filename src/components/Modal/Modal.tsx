import { FC } from 'react'
import Dialog from 'rc-dialog'

import { Button } from '@src/components'
import styles from './Modal.module.css'
import IModal from './Modal.types'

const Modal: FC<IModal> = ({ cancel, confirm, children, isVisible, header, content }) => {
  return (
    <Dialog animation="zoom" maskAnimation="fade" onClose={cancel?.onClose} visible={isVisible} closeIcon={<span />}>
      <div className="space-y-3">
        <p className={styles.modalHeader}>{header}</p>
        {content && <div className={styles.modalContent}>{content}</div>}
        {children}
      </div>

      <div className="flex justify-end space-x-4">
        {cancel?.label && <Button label={cancel?.label} onClick={cancel?.onClose} />}
        {confirm?.onConfirm && <Button label={confirm?.label} className="text-danger" onClick={confirm?.onConfirm} />}
      </div>
    </Dialog>
  )
}

export default Modal
