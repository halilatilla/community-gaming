import React, { createContext, useContext, useState, FC, useEffect } from 'react'

import ITournamentsContext from './Tournaments.types'

const initialTournamentsContext: ITournamentsContext = {
  tournaments: [],
  setTournaments: () => {},
  handleUpVote: () => {},
  handleDownVote: () => {},
}

const TournamentsContext = createContext<ITournamentsContext>(initialTournamentsContext)

export const TournamentsProvider: FC = ({ children }) => {
  const [tournaments, setTournaments] = useState(initialTournamentsContext.tournaments)

  //get initial data from localStorage and set it to state
  useEffect(() => {
    const localTournaments = JSON.parse(localStorage.getItem('tournaments') as string)

    if (localTournaments) {
      setTournaments(localTournaments)
    }
  }, [])

  //watch for changes in tournaments and set localStorage
  useEffect(() => {
    localStorage.setItem('tournaments', JSON.stringify(tournaments))
  }, [tournaments])

  //up and add vote to tournament into the tournament list
  const handleUpVote = (id: string) => {
    setTournaments((prevTournaments) => {
      const updatedTournaments = prevTournaments?.map((tournament) => {
        if (id === tournament.id) {
          return { ...tournament, vote: (tournament.vote ?? 0) + 1, voteDate: Date.now() }
        }
        return tournament
      })
      return updatedTournaments
    })
  }

  //down and add vote to tournament into the tournament list
  const handleDownVote = (id: string) => {
    setTournaments((prevTournaments) => {
      const updatedTournaments = prevTournaments?.map((tournament) => {
        if (id === tournament.id) {
          return { ...tournament, vote: (tournament.vote ?? 0) - 1, voteDate: Date.now() }
        }
        return tournament
      })
      return updatedTournaments
    })
  }

  return (
    <TournamentsContext.Provider value={{ tournaments, setTournaments, handleUpVote, handleDownVote }}>
      {children}
    </TournamentsContext.Provider>
  )
}

export const useTournamentsContext = () => useContext(TournamentsContext)
