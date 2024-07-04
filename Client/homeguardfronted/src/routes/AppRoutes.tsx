import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import SuperAdminDashboard from '../components/superadmin/admindashboard';
import ViewEntries from '../components/superadmin/adminentradas';
import ManageResidences from '../components/superadmin/adminresidencias';
import Guards from '../components/superadmin/adminvigilantes';
import Terminals from '../components/superadmin/adminvigilantes';

import ResidentManagerDashboard from '../components/resident-manager/Dashboard';
import GenerateQR from '../components/resident-manager/GenerateQR';
import SchedulePermissions from '../components/resident-manager/SchedulePermissions';
import ManagePermissions from '../components/resident-manager/ManagePermissions';

import ResidentDashboard from '../components/resident/ResidentDashboard';
import ResidentGenerateQR from '../components/resident/ResidentGenerateQR';
import ResidentSchedulePermissions from '../components/resident/ResidentSchedulePermissions';
import ResidentManagePermissions from '../components/resident/ResidentManagePermissions';

import VisitorDashboard from '../components/visitor/VisitorDashboard';
import VisitorQR from '../components/visitor/VisitorQR';

import ScanQR from '../components/scanner/ScanQR';

import Profile from '../components/Profile';
import Home from '../components/login'; // Tu componente Home
import Header from '../components/Header'; // Importa el Header

const ProtectedRoute = ({ children, role }: { children: JSX.Element, role: string }) => {
  const { role: userRole } = useAuth();
  
  if (userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superadmin/dashboard" element={
          <ProtectedRoute role="superadmin">
            <SuperAdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/superadmin/view-entries" element={
          <ProtectedRoute role="superadmin">
            <ViewEntries />
          </ProtectedRoute>
        } />
        <Route path="/superadmin/manage-residences" element={
          <ProtectedRoute role="superadmin">
            <ManageResidences />
          </ProtectedRoute>
        } />
        <Route path="/superadmin/guards" element={
          <ProtectedRoute role="superadmin">
            <Guards />
          </ProtectedRoute>
        } />
        <Route path="/superadmin/terminals" element={
          <ProtectedRoute role="superadmin">
            <Terminals />
          </ProtectedRoute>
        } />
        <Route path="/resident-manager/dashboard" element={
          <ProtectedRoute role="resident-manager">
            <ResidentManagerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/resident-manager/generate-qr" element={
          <ProtectedRoute role="resident-manager">
            <GenerateQR />
          </ProtectedRoute>
        } />
        <Route path="/resident-manager/schedule-permissions" element={
          <ProtectedRoute role="resident-manager">
            <SchedulePermissions />
          </ProtectedRoute>
        } />
        <Route path="/resident-manager/manage-permissions" element={
          <ProtectedRoute role="resident-manager">
            <ManagePermissions />
          </ProtectedRoute>
        } />
                <Route path="/resident/dashboard" element={
          <ProtectedRoute role="resident">
            <ResidentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/resident/generate-qr" element={
          <ProtectedRoute role="resident">
            <ResidentGenerateQR />
          </ProtectedRoute>
        } />
        <Route path="/resident/schedule-permissions" element={
          <ProtectedRoute role="resident">
            <ResidentSchedulePermissions />
          </ProtectedRoute>
        } />
        <Route path="/resident/manage-permissions" element={
          <ProtectedRoute role="resident">
            <ResidentManagePermissions />
          </ProtectedRoute>
        } />
        <Route path="/visitor/dashboard" element={
          <ProtectedRoute role="visitor">
            <VisitorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/visitor/generate-qr" element={
          <ProtectedRoute role="visitor">
            <VisitorQR />
          </ProtectedRoute>
        } />
        <Route path="/scanner/scan-qr" element={
          <ProtectedRoute role="scanner">
            <ScanQR />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
