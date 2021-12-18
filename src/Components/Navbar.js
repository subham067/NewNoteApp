import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <div
                        className="navbar-toggler d-flex border-0 d-lg-none"
                    // type="button"


                    >

                        <div className="d-flex">
                            <h4>Hi Subham</h4>
                            <button className="btn btn-outline-danger btn-sm" type="submit">
                                Log out
                            </button>
                        </div>
                        {/* <div className="d-flex">
                            <button className="btn btn-outline-success mx-2 btn-sm" type="submit">
                                Login
                            </button>
                            <button className="btn btn-outline-success  mx-2 btn-sm" type="submit">
                                Sing Up
                            </button>
                        </div> */}
                        <span className="navbar-toggler-icon border p-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contract Us
                                </a>
                            </li>


                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-success mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit">
                                Login
                            </button>
                            <button className="btn btn-outline-success  mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit">
                                Sing Up
                            </button>
                        </div>
                        {/* <div className="d-flex align-items-end">
                            <h5 className='d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block'>Hi Subham</h5>
                            <button className="btn btn-outline-danger  mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit">
                                Log out
                            </button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
