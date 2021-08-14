import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = () => {
    return (
        <>
            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>

            <LocationProvider>
                <AnimalProvider>
                    <EmployeeProvider>
                        <CustomerProvider>
                            <Route exact path="/locations">
                                <LocationList />
                            </Route>

                            <Route path="/animals">
                                <AnimalList />
                            </Route>

                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>

                            <Route path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>
                        </CustomerProvider>
                    </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>
        </>
    )
}