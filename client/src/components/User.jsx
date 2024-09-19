import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const [User, setUser] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
           setUser(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    })
    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className='w-95 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-warning">Add +</Link>
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
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <Link to="/update" className="btn btn-success mx-2">update</Link>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
