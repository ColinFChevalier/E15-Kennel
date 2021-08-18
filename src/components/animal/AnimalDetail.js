import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from "react-router"
import "./Animal.css"
import { useParams } from "react-router-dom"

export const AnimalDetail = (props) => {
    console.log(props)
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const [animal, setAnimal] = useState({ location: {}, customer: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();

    const history = useHistory()

    const handleRelease = () => {
        releaseAnimal(animal.id)
            .then(() => {
                history.push("/animals")
            })
    }

    useEffect(() => {
        if (props.animal) {
            setAnimal(props.animal)
        } else {
            const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }

            setAnimal(thisAnimal)
        }
    }, [animalId])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <br></br>
            <button onClick={handleRelease}>Release Animal</button>
            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}