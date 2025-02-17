import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className={`form-check form-switch text-${(props.mode === 'dark') ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{(props.mode === 'dark') ? 'Light Mode' : 'Dark Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
NavBar.protoType = {
    title:PropTypes.string
}
