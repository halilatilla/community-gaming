import React, { createContext, useContext, useState, FC, useEffect } from 'react'

import { ITournament } from '@src/types'

interface ITournamentsContext {
  tournaments?: ITournament[] | null | undefined
  setTournaments: (tournaments: ITournament[] | null | undefined) => void
}

const initialTournamentsContext: ITournamentsContext = {
  tournaments: [],
  setTournaments: () => {},
}

const TournamentsContext = createContext<ITournamentsContext>(initialTournamentsContext)

export const TournamentsProvider: FC = ({ children }) => {
  const [tournaments, setTournaments] = useState(initialTournamentsContext.tournaments)

  useEffect(() => {
    const localTournaments = JSON.parse(localStorage.getItem('tournaments') as string)

    if (localTournaments) {
      setTournaments(localTournaments)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tournaments', JSON.stringify(tournaments))
  }, [tournaments])

  return <TournamentsContext.Provider value={{ tournaments, setTournaments }}>{children}</TournamentsContext.Provider>
}

export const useTournamentsContext = () => useContext(TournamentsContext)
