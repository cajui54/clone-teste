import React from 'react';
import DashboardMain from './styledDashboard';
import Aside from '../components/Dashboard/Aside';
import Main from '../components/Dashboard/Main';

const Dashboard = () => {
  return (
    <DashboardMain>
      <Aside/>
      <Main/>
    </DashboardMain>
  )
}

export default Dashboard
