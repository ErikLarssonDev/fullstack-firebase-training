import React from 'react'
import { useEffect, useState } from 'react'
import User from './User'
import '../../index.css';

const UsersTable = ({ users }: { users: Array<any> }) => {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                    {users.map((user: any) => (
                        <User key={user.id} name={user.name} email={user.email} dateOfBirth={user.dateOfBirth} />
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UsersTable
