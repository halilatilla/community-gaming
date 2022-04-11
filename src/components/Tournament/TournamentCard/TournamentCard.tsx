import { FC, useState } from 'react'
import Image from 'next/image'
import { HiTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import classnames from 'classnames'

import { BLUR_DATA_URL } from '@src/config/constants'
import { useTournamentsContext } from '@src/store'
import { getFormattedDeadline } from '@src/lib'
import { Button, Modal, Indicator } from '@src/components'

import UpdateTournament from '../UpdateTournament/UpdateTournament'
import ITournamentCard from './TournamentCard.types'
import styles from './TournamentCard.module.css'

const TournamentCard: FC<ITournamentCard> = ({ tournament }) => {
  const { name, owner, vote, deadline, id } = tournament

  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false)
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false)
  const { upVote, downVote, removeTournament } = useTournamentsContext()

  const handleRemoveConfirm = () => {
    removeTournament(id)
    setIsRemoveModalVisible(false)
    toast.warning(`Tournament deleted successfully`)
  }

  const handleRemoveClose = () => {
    setIsRemoveModalVisible(false)
  }

  const handleUpdateClose = () => {
    setIsUpdateModalVisible(false)
  }

  return (
    <>
      <Modal
        isVisible={isRemoveModalVisible}
        confirm={{ label: 'delete', onConfirm: handleRemoveConfirm }}
        cancel={{ label: 'cancel', onClose: handleRemoveClose }}
        content={name}
        header="are you sure about to delete this tournament?"
      />
      <Modal isVisible={isUpdateModalVisible} header={`update: ${name}`} cancel={{ onClose: handleUpdateClose }}>
        <UpdateTournament tournament={tournament} onCancel={handleUpdateClose} />
      </Modal>
      <div className={classnames(styles.tournamentCard, 'group')}>
        <div className={styles.imageWrapper}>
          <Image
            src={owner.avatar}
            alt={name}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover object-center"
            layout="fill"
          />
          <Button
            className={classnames(styles.deleteButton, 'group-hover:block')}
            appearance="icon"
            onClick={() => setIsRemoveModalVisible(true)}
          >
            <HiTrash className="text-xl text-white" />
          </Button>

          <div className={classnames(styles.vote, 'flex-center')}>
            <Indicator count={vote ?? 0} />
            <span className="font-medium">vote</span>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.infoGroup}>
            <p className={styles.name}>{name}</p>
            <p className={styles.name}>owner: {owner.username}</p>
            <p>{getFormattedDeadline(deadline)}</p>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button label="up" onClick={() => upVote(id)} />
              <Button label="down" onClick={() => downVote(id)} disabled={vote === 0 || !vote} />
            </div>
            <Button label="update" onClick={() => setIsUpdateModalVisible(true)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TournamentCard
