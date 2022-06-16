import React, { createContext } from 'react'
import EmployeeA from './EmployeeA'
export const myContext = createContext(null)

export default function Parent() {

    const employeeDetails = {
        name : 'John Bailey',
        age : 25,
        designation : 'Senior Developer',
        mobile : '123456789'
    }

    return (
        <div className='border border-primary my-5 p-4'>
            <myContext.Provider value={employeeDetails}>
                <h3 className='text-center'>Context API works !!!</h3>
                <p className='fw-bold'>Parent Component : </p>
                <EmployeeA />
            </myContext.Provider>
        </div>
    )
}
