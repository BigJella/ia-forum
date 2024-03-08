"use client"

import Link from "next/link"

export default function Navbar() {
    return(
      <nav className="navbar navbar-expand-lg bg-light" style={{height: "50px"}}>
        <div className="container-fluid">
          
          <Link className="navbar-brand" href="/">IA Forums</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/browse">Browse</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">General</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><Link className="dropdown-item" href="#">IT</Link></li>
                  <li><Link className="dropdown-item" href="#">Healthcare</Link></li>
                  <li><Link className="dropdown-item" href="#">Engineering</Link></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
              <li className="nav-item" style={{listStyleType: "none", marginRight: "10px"}}>
                <Link className="btn btn-primary" href="/login" role="button">Login</Link>
              </li>
              <li className="nav-item" style={{listStyleType: "none"}}>
                <Link className="btn btn-outline-secondary" href="/register" role="button">Register</Link>
              </li>
          </div>
        </div>
      </nav>
    )
}