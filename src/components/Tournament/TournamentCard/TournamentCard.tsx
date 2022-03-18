import { FC, useState } from 'react'
import Image from 'next/image'
import { HiTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import classnames from 'classnames'

import { BLUR_DATA_URL } from '@src/config/constants'
import { Button, Modal } from '@src/components'
import { useTournamentsContext } from '@src/store'
import UpdateTournament from '../UpdateTournament/UpdateTournament'
import ITournamentCard from './TournamentCard.types'
import styles from './TournamentCard.module.css'

const TournamentCard: FC<ITournamentCard> = ({ tournament }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false)
  const { tournaments, setTournaments, handleUpVote, handleDownVote } = useTournamentsContext()

  const handleDeleteConfirm = () => {
    //find tournament into tournaments array and remove it
    const newTournaments = tournaments?.filter((t) => t.id !== tournament.id)
    setTournaments(newTournaments)
    setIsDeleteModalVisible(false)
    toast.success(`Tournament deleted successfully`)
  }

  const handleDeleteClose = () => {
    setIsDeleteModalVisible(false)
  }

  const handleUpdateClose = () => {
    setIsUpdateModalVisible(false)
  }

  return (
    <>
      <Modal
        isVisible={isDeleteModalVisible}
        confirm={{ label: 'delete', onConfirm: handleDeleteConfirm }}
        cancel={{ label: 'cancel', onClose: handleDeleteClose }}
        content={tournament.name}
        header="are you sure about to delete this tournament?"
      />
      <Modal isVisible={isUpdateModalVisible} header={`update ${tournament.name}`}>
        <UpdateTournament tournament={tournament} onCancel={handleUpdateClose} />
      </Modal>
      <div className={classnames(styles.tournamentCard, 'group')}>
        <div className={styles.imageWrapper}>
          <Image
            src={tournament.owner.avatar}
            alt={tournament.name}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover object-center"
            layout="fill"
          />
          <Button
            className={classnames(styles.deleteButton, 'group-hover:block')}
            appearance="icon"
            onClick={() => setIsDeleteModalVisible(true)}
          >
            <HiTrash className="text-xl text-danger" />
          </Button>

          <div className={classnames(styles.vote, 'flex-center')}>
            <span>{tournament?.vote ?? 0}</span>
            <span>vote</span>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.infoGroup}>
            <p className={styles.name}>{tournament.name}</p>
            <p className={styles.name}>owner: {tournament.owner.username}</p>
            <p>{format(new Date(tournament.deadline), 'MM/dd/yyyy KK:mm')}</p>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button label="up" onClick={() => handleUpVote(tournament.id)} />
              <Button
                label="down"
                onClick={() => handleDownVote(tournament.id)}
                disabled={tournament.vote === 0 || !tournament.vote}
              />
            </div>
            <Button label="update" onClick={() => setIsUpdateModalVisible(true)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TournamentCard
