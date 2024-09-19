import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [nicname, setNicname] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/createUser', {name, email, nicname})
        .then(response => {
            console.log(response)
            navigate('/');
        })

        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3 '>
                <form onSubmit={Submit} >
                    <h2 className='mb-4'>Add User</h2>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Enter Name'
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder='Enter Email'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            NicName
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3" placeholder='Enter Nic Name'
                                onChange={(e) => setNicname(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
