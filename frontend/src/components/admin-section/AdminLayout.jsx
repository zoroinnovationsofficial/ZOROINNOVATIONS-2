import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/admin-section/Header.jsx';
import AdminFooter from './loginPage/LoginFooter.jsx';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;


