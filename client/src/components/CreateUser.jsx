import React from 'react'

const CreateUser = () => {
    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3 '>
                <form>
                    <h2 className='mb-4'>Add User</h2>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder='Enter Name'/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder='Enter Email'/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Age
                        </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder='Enter Age'/>
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
