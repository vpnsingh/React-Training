import React, { useContext } from 'react'
import { myContext } from './Parent'

export default function EmployeeB() {

    const employee = useContext(myContext)

    return (
        <div className='border border-success my-5 p-4'>
            <p className='fw-bold'>Employee B section : </p>
            <table className='taable table-bordered'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{employee.age}</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>{employee.designation}</td>
                    </tr>
                    <tr>
                        <th>Mobile No.</th>
                        <td>{employee.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
