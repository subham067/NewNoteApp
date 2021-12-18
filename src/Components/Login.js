import React from 'react'
import Navbar from './Navbar'

function Login() {
    return (
      <div>
      <Navbar/>
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
                <div className="col-sm-12 col-md-9 col-lg-6 bg-light">
                    <form className="p-4 round-2">
                        <h2 className="mb-3">Sing In</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className=" text-center">
                            <button type="submit" className="btn btn-primary px-3 w-50">
                                Sing in
                            </button>
                            <button type="submit" className="btn btn-primary px-3 mx-2 mt-2 w-50">
                                Sing in With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>

    )
}

export default Login
