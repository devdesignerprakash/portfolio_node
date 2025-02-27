import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-grow-1 p-4">
        <Outlet /> {/* This will render the nested admin routes */}
      </div>
    </div>
  );
};

export default AdminLayout;