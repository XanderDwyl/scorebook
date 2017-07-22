import React from 'react';
import { Link } from 'react-router';

const DashboardButton = () => (
  <li className="nav-item">
    <Link href="/dashboard" className="sign-up-links sign-up">DASHBOARD</Link>
  </li>
);

export default DashboardButton;
