import { FC, useState } from 'react'
import Image from 'next/image'
import { HiTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

import { BLUR_DATA_URL } from '@src/config/constants'
import { Button, Modal } from '@src/components'
import { useDeleteTournamentMutation } from '@src/generated/graphql'
import ITournamentCard from './TournamentCard.types'

const TournamentCard: FC<ITournamentCard> = ({ tournament }) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [vote, setVote] = useState(0)
  const [deleteTournament, { data, loading, error }] = useDeleteTournamentMutation()

  const handleDeleteConfirm = () => {
    /*  deleteTournament({
      variables: {
        id: tournament.id,
      },
    }) */
    setIsDeleteModal(false)
    error ? toast.error(error) : toast.success(`Tournament deleted successfully`)
  }

  const handleDeleteClose = () => {
    setIsDeleteModal(false)
  }

  const handleUpVote = () => {
    setVote(vote + 1)
  }

  const handleDownVote = () => {
    if (vote > 0) {
      setVote(vote - 1)
    }
  }

  return (
    <>
      <Modal
        isVisible={isDeleteModal}
        confirm={{ label: 'delete', onConfirm: handleDeleteConfirm }}
        cancel={{ label: 'cancel', onClose: handleDeleteClose }}
        content={tournament.name}
        header="are you sure about to delete this tournament?"
      />
      <li className="group flex h-[440px] flex-col overflow-hidden rounded-xl border bg-darkGrey">
        <div className="relative h-[170px] w-full shrink-0">
          <Image
            src={tournament.owner.avatar}
            alt={tournament.name}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover object-center"
            layout="fill"
          />
          <Button
            className="absolute right-3 top-4 hidden bg-black group-hover:block"
            appearance="icon"
            onClick={() => setIsDeleteModal(true)}
          >
            <HiTrash className="text-xl text-danger" />
          </Button>

          <div className="flex-center absolute top-4 left-4 h-14 w-14 flex-col rounded-lg bg-black capitalize">
            <span>{vote}</span>
            <span>vote</span>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between px-4 pb-4">
          <div className="space-y-2 overflow-hidden bg-black p-2 capitalize">
            <p className="font-bold line-clamp-1">{tournament.name}</p>
            <p className="font-bold line-clamp-1">owner: {tournament.owner.username}</p>
            <p>{format(new Date(tournament.deadline), 'MM/dd/yyyy KK:mm')}</p>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button label="up" onClick={handleUpVote} />
              <Button label="down" onClick={handleDownVote} />
            </div>
            <Button label="update" />
          </div>
        </div>
      </li>
    </>
  )
}

export default TournamentCard
