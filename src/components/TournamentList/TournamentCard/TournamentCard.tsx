import { FC } from 'react'
import Image from 'next/image'
import { HiTrash } from 'react-icons/hi'

import { BLUR_DATA_URL } from '@src/config/constants'
import { Button } from '@src/components'
import ITournamentCard from './TournamentCard.types'

const TournamentCard: FC<ITournamentCard> = ({ tournament }) => {
  return (
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
        <Button className="absolute right-3 top-4 hidden bg-black group-hover:block" appearance="icon">
          <HiTrash className="text-xl text-danger" />
        </Button>

        <div className="flex-center absolute top-4 left-4 h-14 w-14 flex-col rounded-lg bg-black capitalize">
          <span>0</span>
          <span>vote</span>
        </div>
      </div>
      <div className="flex h-full flex-col  justify-between px-4 pb-4">
        <div className="space-y-2 overflow-hidden bg-black p-2 capitalize">
          <p className="font-bold line-clamp-1">{tournament.name}</p>
          <p className="font-bold line-clamp-1">owner: {tournament.owner.username}</p>
          <p>{tournament.deadline}</p>
        </div>
        <div className="flex justify-between">
          <div className="space-x-2">
            <Button label="up" />
            <Button label="down" />
          </div>
          <Button label="update" />
        </div>
      </div>
    </li>
  )
}

export default TournamentCard
