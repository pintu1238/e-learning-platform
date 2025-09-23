import Link from 'next/link';
import React from 'react'
import "../../../public/sass/pages/sidebar.scss";

const SideBar = () => {
  return (
    <div className="bar">
      <ul>
        <li><Link href="/dashboard">Profile</Link></li>
        <li><Link href="/wishlist">Wishlist</Link></li>
        <li><Link href="/chaangePasswordDashboard">Change Password</Link></li>
        <li><Link href="/signup">Log Out</Link></li>
      </ul>
    </div>
  )
}

export default SideBar;