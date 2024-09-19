import React, { useState } from 'react'

const User = () => {
    const [User, setUser] = useState([{
        Name: "Dhruv", Email: "dhruvgadara123@gmail.com", Age: 21
    }])
    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className='w-50 bg-white rounded p-3'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                User.map((user) => {
                                    return (

                                        <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Age}</td>
                                            <td><button className='btn btn-primary mx-2'>Edit</button><button className='btn btn-primary'>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
