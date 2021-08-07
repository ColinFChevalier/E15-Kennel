import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])

  return (
    <section className="employees">
      {
        employees.map(employee => {
          return (
            <div className="employee" >
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__locationId">
                Store Location: { employee.location.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}