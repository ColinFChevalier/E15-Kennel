import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalDetail } from "./AnimalDetail"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()

  useEffect(() => {
      getAnimals()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
          Make Reservation
      </button>
      <div className="animals">
      {
        filteredAnimals.map(animal => {
          return <AnimalDetail key={animal.id} animal={animal} />
        })
      }
      </div>
    </>
  )
}

