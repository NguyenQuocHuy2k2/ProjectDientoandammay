import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="logonhom10.png" width="112" height="28" alt="logo nhom 10" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Trang chủ
            </a>
            <a href="/sinhviens" className="navbar-item">
              Danh sách sinh viên
            </a>
            <a href="/admin" className="navbar-item">
              Quản lý sinh viên
            </a>
          </div>

          
        </div>
      </nav>
    )
  }
}
