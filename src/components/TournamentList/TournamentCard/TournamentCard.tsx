import { FC, useState } from 'react'
import Image from 'next/image'
import { HiTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

import { BLUR_DATA_URL } from '@src/config/constants'
import { Button, Modal } from '@src/components'
import { useTournamentsContext } from '@src/store'
import ITournamentCard from './TournamentCard.types'

const TournamentCard: FC<ITournamentCard> = ({ tournament }) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const { tournaments, setTournaments } = useTournamentsContext()

  const handleDeleteConfirm = () => {
    //find tournament into tournaments array and remove it
    const newTournaments = tournaments?.filter((t) => t.id !== tournament.id)
    setTournaments(newTournaments)
    setIsDeleteModal(false)
    toast.success(`Tournament deleted successfully`)
  }

  const handleDeleteClose = () => {
    setIsDeleteModal(false)
  }

  const handleUpVote = (id: string) => {
    //add votes to tournament into the tournament list
    // @ts-ignore
    setTournaments((prevTournaments) => {
      const updatedTournaments = prevTournaments?.map((tournament: { id: string; vote: any }) => {
        if (id === tournament.id) {
          return { ...tournament, vote: (tournament.vote ?? 0) + 1 }
        }
        return tournament
      })
      return updatedTournaments
    })
  }

  const handleDownVote = (id: string) => {
    //remove votes to tournament into the tournament list
    // @ts-ignore
    setTournaments((prevTournaments) => {
      const updatedTournaments = prevTournaments?.map((tournament: { id: string; vote: any }) => {
        if (id === tournament.id) {
          return { ...tournament, vote: (tournament.vote ?? 0) - 1 }
        }
        return tournament
      })
      return updatedTournaments
    })
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
            <span>{tournament?.vote ?? 0}</span>
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
              <Button label="up" onClick={() => handleUpVote(tournament.id)} />
              <Button
                label="down"
                onClick={() => handleDownVote(tournament.id)}
                disabled={tournament.vote === 0 || !tournament.vote}
              />
            </div>
            <Button label="update" />
          </div>
        </div>
      </li>
    </>
  )
}

export default TournamentCard
