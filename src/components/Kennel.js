import React from "react"
// import { Animal } from "./animal/Animal"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

import { Customer } from "./customers/Customer"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"

// import { Employee } from "./employees/Employee"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"

import { Location } from "./locations/Locations"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList/>
            </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList/>
            </EmployeeProvider>
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider >
                <CustomerList />
            </CustomerProvider >
        </article>
    </>
)