import React from "react";
import Link from "next/link";


export default function Footer() {
    return (
        <>
          <footer className="footer justify-content-center bg-body-secondary" style={{  padding: "20px", textAlign: "center" }}>
  <p >Fresh to Home-Order. Get it delivered at your door steps.</p>
  <div className="container text-center">
  <div className="row">
    <div className="col">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <li>Bangalore</li>
      <li>Kannur </li>
      <li>Kozhikode</li>
      </ul>
    </div>
    <div className="col">
    <ul className="footer-links">
    <li><Link href="#privacy"style={{color: "black",textDecoration: "none",}}>Privacy Policy</Link></li>
    <li><Link href="#terms"style={{color: "black",textDecoration: "none",}}>Terms of Service</Link></li>
    <li><Link href="#contact"style={{color: "black",textDecoration: "none",}}>Contact Us</Link></li>
  </ul>
    </div>
    <div className="col">
    <ul className="footer-links ">
    <li><Link href="#facebook "style={{color: "black",textDecoration: "none",}}>Facebook</Link></li>
    <li><Link href="#twitter"style={{color: "black",textDecoration: "none",}}>Twitter</Link></li>
    <li><Link href="#instagram"style={{color: "black",textDecoration: "none",}}>Instagram</Link></li>
  </ul>
    </div>
  </div>
</div>
  
  
</footer>

        </>
    );
}
