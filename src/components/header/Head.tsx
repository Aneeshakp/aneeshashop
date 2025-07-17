'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();  

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?title=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img src="https://static.freshtohome.com/images/logo/2021/logo-medium.png" height="100px" alt="Logo" />
        </Link>
         <form className="d-flex" role="search" onSubmit={(e) => {
            e.preventDefault();
            const input = (e.currentTarget.elements.namedItem('search') as HTMLInputElement);
            const query = input?.value.trim();
            if (query) {
                window.location.href = `/products?title=${encodeURIComponent(query)}`;
            }
            }}>
        <input
        className="form-control me-3"
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
      </div>
    </nav>
  );
}
