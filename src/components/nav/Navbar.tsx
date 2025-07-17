import React from "react";
import Link from "next/link";


export default function Nav() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <style >{`
          .navbar-nav {
            display: flex;
            justify-content: center;
            gap: 20px;
          }
        `}</style>
      </>
      
      

    );
}
